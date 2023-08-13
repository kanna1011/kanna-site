import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { name, email, comment } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'recipient-email@example.com',
      subject: `Contact Form Submission from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Comment: ${comment}
        `
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Email sent successfully.');
    } catch (error) {
      res.status(500).send('Error sending email.');
    }
  } else {
    res.status(405).send('Method not allowed.');
  }
}

export default handler;
