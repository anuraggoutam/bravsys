import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  try {
    const response = await resend.emails.send({
      from: "VertexWeb<onboarding@resend.dev>",
      to: "anuraggoutam01@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
          <h2 style="background-color: #4A90E2; color: white; padding: 10px; border-radius: 10px 10px 0 0; text-align: center;">New Contact Form Submission</h2>
          <div style="padding: 20px; background-color: #fff; border-radius: 0 0 10px 10px;">
            <p style="font-size: 16px; color: #333; margin-bottom: 10px;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 16px; color: #333; margin-bottom: 10px;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 16px; color: #333; margin-bottom: 10px;"><strong>Message:</strong></p>
            <p style="font-size: 14px; color: #555; padding: 10px; background-color: #f1f1f1; border: 1px solid #ddd; border-radius: 5px;">${message}</p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully!", response);

    return NextResponse.json({ message: "Email sent successfully!", response });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Email failed to send", error },
      { status: 500 }
    );
  }
}
