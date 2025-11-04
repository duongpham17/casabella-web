import type { NextRequest } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { first_name, last_name, email, subject, message } = body;

    // Use environment variables for sensitive info (set in .env.local)
    const hostEmail = "hello@casabellalondon.co.uk";
    const hostPassword = process.env.EMAIL_PASSWORD;

    if (!hostEmail || !hostPassword) {
      return new Response('Email credentials not configured', { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      secure: true,
      port: 465,
      host: "smtp.gmail.com",
      auth: {
        user: hostEmail,
        pass: hostPassword,
      },
    });

    const mail = {
      from: `${email} <${hostEmail}>`,
      to: hostEmail,
      subject,
      html: `
        <html>
          <body>
            <div>
              <p style="border-bottom: 1px solid grey; border-top: 1px solid grey; padding: 1rem 0">
                <span>${email}</span>
              </p>
              <p>From: ${first_name} ${last_name}</p>
              <p>${message}</p>
            </div>
          </body>
        </html>
      `,
    };

    const info = await transporter.sendMail(mail);

    return new Response(`Message sent: ${info.messageId}`, { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response('Failed to send email', { status: 500 });
  }
}
