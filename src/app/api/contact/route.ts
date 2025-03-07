import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { NextResponse } from 'next/server';

const sesClient = new SESClient({
  region: 'us-west-2',
  credentials: {
    accessKeyId: process.env.MY_AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.MY_AWS_SECRET_ACCESS_KEY as string,
  },
});

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ success: false, message: 'Missing fields' }, { status: 400 });
    }

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

    console.log(JSON.stringify(params, null, 2));

    await sesClient.send(new SendEmailCommand(params));

    return NextResponse.json({ success: true, message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('SES Error:', error);
    return NextResponse.json({ success: false, message: 'Error sending email' }, { status: 500 });
  }
}
