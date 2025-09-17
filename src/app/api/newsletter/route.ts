import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  try {
    // Send a confirmation email via Resend
    const response = await resend.emails.send({
      from: "VertexWeb<onboarding@resend.dev>",
      to: email,
      subject: "Welcome to our Newsletter!",
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px; background-color: #f9f9f9;">
               <h2 style="background-color: #4A90E2; color: white; padding: 10px; border-radius: 10px 10px 0 0; text-align: center;">Welcome to our Newsletter!</h2>
               <div style="padding: 20px; background-color: #fff; border-radius: 0 0 10px 10px;">
                 <p style="font-size: 16px; color: #333;">Thank you for subscribing to our newsletter! You will receive the latest updates.</p>
               </div>
             </div>`,
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
