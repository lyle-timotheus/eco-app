import NextAuth from 'next-auth/next';
import GoogleProvider from 'next-auth/providers/google';
import EmailProvider from 'next-auth/providers/email';
import CredentialsProvider from 'next-auth/providers/credentials';

import { MongoDBAdapter } from '@next-auth/mongodb-adapter';
import clientPromise from '../../../lib/mongodb';
import connectDB from '../../../lib/connectDB';
import Users from '../../../models/userModel';

import { compare } from 'bcrypt';

// connectDB();

export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      from: process.env.EMAIL_FROM,
    }),
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: {
          label: 'Email',
          type: 'email',
          placeholder: 'email',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'password',
        },
      },
      async authorize(credentials, req) {
        connectDB().catch((error) => {
          error: 'Connection Failed...!';
        });

        // check if user exists
        const result = await Users.findOne({ email: credentials.email });
        if (!result) {
          throw new Error('No user found with that email, please sign up...!');
        }

        // compare hashed passwords in DB
        // result.password => database
        // credential.password => user input
        const checkPassword = await compare(
          credentials.password,
          result.password
        );

        // check for incorrect password
        if (!checkPassword || result.email !== credentials.email) {
          throw new Error('Username or password does not match');
        }

        return result;
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    jwt: ({ token, user }) => {
      // first time jwt callback is run, user object is available
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id;
      }
      return session;
    },
  },
  secret: 'jxkzj1+g9FcZGJxAU5cRe16HEf7WxZyJetUXqoAk730=',
  jwt: {
    secret: 'test',
    encryption: true,
  },
  adapter: MongoDBAdapter(clientPromise),
});
