import connectDB from '../../../lib/connectDB';
import Users from '../../../models/userModel';
import { hash } from 'bcrypt';

export default async function handler(req, res) {
  connectDB().catch((error) => res.json({ error: 'Connection failed' }));

  // only post method is accepted
  if (req.method === 'POST') {
    if (!req.body)
      return res.status(404).json({ error: "Don't have form data" });
    const { name, email, password } = req.body;

    // check for duplicate users
    const checkExisting = await Users.findOne({ email });

    if (checkExisting)
      return res.status(422).json({ message: 'User already exists' });

    // hash password
    Users.create(
      { name, email, password: await hash(password, 12) },
      function (err, data) {
        if (err) return res.status(404).json({ err });
        res.status(201).json({ status: true, user: data });
      }
    );
  } else {
    res
      .status(500)
      .json({ message: 'HTTP Method not valid, only POST accepted' });
  }
}
