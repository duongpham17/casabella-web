// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  first_name: string,
  last_name: string,
  email: string,
  subject: string,
  message: string,
}

export default function handler( req: NextApiRequest, res: NextApiResponse<Data> ) {
  require('dotenv').config();

  const nodemailer = require('nodemailer');

  const host = {
    email: "hello@casabellalondon.co.uk",
    password: process.env.EMAIL_PASSWORD
  };

  const transporter = nodemailer.createTransport({
    secure: true,
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: host.email,
      pass: host.password,
    },
  });

  const mail = {
    from: `${req.body.email} <${host.email}>`,
    to: host.email,
    subject: `${req.body.subject}`,
    html: `
      <html>
        <body>
          <div>

            <p style="border-bottom: 1px solid grey; border-top: 1px solid grey; padding: 1rem 0">
              <span>${req.body.email}</span>
            </p>

            <p>From: ${req.body.first_name} ${req.body.last_name}</p>

            <p>${req.body.message}</p>

          </div>
        </body>
      </html>
    `
  };

  transporter.sendMail(mail, function (err: any, info: any) {
    if(err)
      res.status(404)
    else
      res.status(200)
  });
}
