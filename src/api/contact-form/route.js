// Use this file inside Next.js App Router: /app/api/contact-form/route.js
import nodemailer from "nodemailer";

// Only required for standalone scripts; Next.js loads env automatically
// import dotenv from 'dotenv';
// dotenv.config();

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: "Missing required fields." }), {
        status: 400,
      });
    }

    // Set up transporter
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      auth: {
        user: process.env.VITE_BREVO_LOGIN,
        pass: process.env.VITE_BREVO_PASSWORD,
      },
    });

    // Send the email
    await transporter.sendMail({
      from: `"Liberty Exports Form" <${process.env.VITE_BREVO_EMAIL}>`,
      to: process.env.VITE_BREVO_EMAIL, // Receiving address
      replyTo: email, // Sets "Reply-To" header
      subject: "New Contact Form Submission",
      html: `
        <h2>New Message from Liberty Exports Contact Form</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error("❌ Email send failed:", error);
    return new Response(JSON.stringify({ error: "Email failed to send." }), { status: 500 });
  }
}
