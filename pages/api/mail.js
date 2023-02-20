export default function (req, res) {
  // require('dotenv').config();

  let nodemailer = require('nodemailer');
  const transporter = nodemailer.createTransport({
    port: 587,
    host: 'smtp.sendgrid.net',
    auth: {
      user: 'apikey',
      pass: process.env.EMAIL_SERVER_PASSWORD,
    },
    secure: false,
    tls: {
      ciphers: 'SSLv3',
    },
  });

  const mailData = {
    from: 'lyle.timotheus@avenutech.com',
    to: 'lyle.timotheus@avenutech.com',
    subject: `Message From ${req.body.email}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from: ${req.body.email}</p>`,
  };

  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });

  console.log(req.body);
  res.send('success');
}
