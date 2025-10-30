import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { userName, email, message } = await request.json();
    const { SMTP_EMAIL, SMTP_PASSWORD } = process.env;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 587,
      secure: true,
      auth: {
        user: SMTP_EMAIL,
        pass: SMTP_PASSWORD,
      },
    });

    const mailOption = {
      from: SMTP_EMAIL,
      to: SMTP_EMAIL,
      subject: "Alguém entrou em contato pelo portfólio",
      html: `
                <h3>Olá, Thiago</h3>
                <p> name: ${userName}</p>
                <p> email: ${email}</p>
                <p> message: ${message}</p> 
            `,
    };

    await transporter.sendMail(mailOption);

    return NextResponse.json(
      { message: "Email Sent Successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Failed to Send Email" },
      { status: 500 }
    );
  }
}
