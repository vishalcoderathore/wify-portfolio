import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { NextApiRequest, NextApiResponse } from 'next';

const sesClient = new SESClient({
  region: 'us-west-2',
  credentials: {
    accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY as string,
  },
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  const params = {
    Source: process.env.SES_VERIFIED_EMAIL as string,
    Destination: { ToAddresses: [process.env.SES_VERIFIED_EMAIL as string] },
    Message: {
      Subject: { Data: `New Contact Form Submission from ${name}` },
      Body: {
        Text: { Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` },
      },
    },
  };

  try {
    await sesClient.send(new SendEmailCommand(params));
    res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error sending email' });
  }
}
