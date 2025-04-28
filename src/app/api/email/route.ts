import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    // Parse the request body
    const data = await request.json();
    const { name, email, company, service, message } = data;

    // Basic validation
    if (!email || !name || !message) {
      return NextResponse.json(
        { error: 'Please fill in all required fields (name, email, and message)' },
        { status: 400 }
      );
    }

    // Create email content
    const emailSubject = `New Contact Form Submission from ${name}`;
    const emailBody = `
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company || 'Not provided'}</p>
      <p><strong>Service Interested In:</strong> ${service || 'Not specified'}</p>
      <h2>Message:</h2>
      <p>${message}</p>
    `;

    // Configure email transport (using Gmail)
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kojinfox@gmail.com', // Your Gmail address
        pass: process.env.EMAIL_PASSWORD, // Set this in your environment variables
      },
    });

    // Send the email
    const mailOptions = {
      from: `"Kojin Fox Website" <kojinfox@gmail.com>`,
      to: 'kojinfox@gmail.com',
      replyTo: email,
      subject: emailSubject,
      html: emailBody,
    };

    await transporter.sendMail(mailOptions);

    // Return success
    return NextResponse.json({ 
      success: true, 
      message: 'Email sent successfully!' 
    });
  } catch (error) {
    console.error('Email Sending Error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
} 