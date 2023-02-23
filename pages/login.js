import { useState } from 'react';
import Link from 'next/link';
import { login_validate } from '../lib/validate';
import { useRouter } from 'next/router';

import { useFormik } from 'formik';

import { signIn, useSession } from 'next-auth/react';
import ErrorAlert from '../components/ErrorAlert';

const login = () => {
  const { data: session, status } = useSession();
  const [error, setError] = useState('');
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      emailSignIn: '',
    },
    validate: login_validate,
    onSubmit: onSubmit,
  });

  console.log(formik.errors);
  console.log(status);

  async function onSubmit(values) {
    const status = await signIn('credentials', {
      redirect: false,
      email: values.email,
      password: values.password,
      callbackUrl: '/',
    });

    if (status.ok) {
      router.push(status.url);
    } else {
      setError('Incorrect email and password credentials');
    }
  }

  async function handleEmailSignIn(e) {
    e.preventDefault();
    // const email = prompt('Enter your email address');
    const emailInput = document.getElementById('emailSignIn');
    const email = emailInput.value;
    if (email) {
      const status = await signIn('email', { email, callbackUrl: '/' });
      if (!status.ok) {
        setError('Unable to sign in with email');
      }
    }
  }

  // Google handler function
  async function handleGoogleSignIn(e) {
    e.preventDefault();
    signIn('google', { callbackUrl: 'http://localhost:3000' });
  }

  if (status === 'authenticated') {
    router.push('/');
  }

  return (
    <div>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <Link href={'/register'}>
                <a className="font-medium text-indigo-600 hover:text-indigo-500">
                  register your free account
                </a>
              </Link>
            </p>
          </div>
          <form onSubmit={formik.handleSubmit} className="mt-8 space-y-6">
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label className="sr-only">Email address</label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  {...formik.getFieldProps('email')}
                  required
                  className="ml-[5px] relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                {formik.errors.email && formik.touched.email ? (
                  <ErrorAlert message={formik.errors.email} />
                ) : (
                  <></>
                )}
              </div>
              <div>
                <label className="sr-only">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  {...formik.getFieldProps('password')}
                  required
                  className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                />
                {formik.errors.password && formik.touched.password ? (
                  <ErrorAlert message={formik.errors.password} />
                ) : (
                  <></>
                )}
              </div>
            </div>

            <span className="text-rose-400">{error}</span>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
            <div className="flex flex-col items-center">
              <div className="flex items-baseline w-full">
                <hr className="w-32 h-1 mx-auto my-4 bg-indigo-700 border-0 rounded md:my-10 dark:bg-indigo-700" />
                <span className="mb-5 font-normal">Or continue with</span>
                <hr className="w-32 h-1 mx-auto my-4 bg-indigo-700 border-0 rounded md:my-10 dark:bg-indigo-700" />
              </div>

              <button
                type="submit"
                className="flex items-center py-3 group relative w-full flex justify-center rounded-md border border-transparent py-2 px-4 text-sm font-medium text-gray-400"
                onClick={handleGoogleSignIn}
              >
                {/* <BsGoogle>Sign In With Google</BsGoogle> */}
                <img
                  src="/google-logo.png"
                  width={25}
                  height={25}
                  className="mr-4"
                />
                <span>Sign in with Google</span>
              </button>
            </div>

            <input
              id="emailSignIn"
              type="email"
              name="emailSignIn"
              placeholder="email"
              {...formik.getFieldProps('emailSignIn')}
              // required
              className="relative block w-full appearance-none rounded border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            />
            {formik.errors.emailSignIn && formik.touched.emailSignIn ? (
              <ErrorAlert message={formik.errors.emailSignIn} />
            ) : (
              <></>
            )}
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              onClick={handleEmailSignIn}
            >
              Sign in with email
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default login;
