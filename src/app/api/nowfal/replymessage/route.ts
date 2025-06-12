import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { email, replyMsg, senderName } = await req.json();
    const mailOptions = {
      from: `Nowfal <${process.env.ADMIN_EMAIL}>`,
      to: email,
      subject: "Thank you for reaching out!",
      text: replyMsg,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
          <h2 style="color: #2563eb;">Thank you for your message, ${senderName || 'there'}!</h2>
          <p>I appreciate you taking the time to contact me. Here's my response to your inquiry:</p>
          
          <div style="background-color: #f8fafc; padding: 15px; border-left: 4px solid #2563eb; margin: 20px 0;">
            <p style="font-style: italic;">"${replyMsg}"</p>
          </div>
          
          <p>If you have any further questions, please don't hesitate to reply to this email.</p>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
            <p>Best regards,</p>
            <p style="font-weight: bold;">Nowfal</p>
            <p style="color: #64748b; font-size: 14px;">${process.env.ADMIN_EMAIL}</p>
          </div>
        </div>
      `
    };
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.ADMIN_EMAIL,
        pass: process.env.ADMIN_EMAIL_PASS
      }
    });
    await transporter.sendMail(mailOptions);
    return NextResponse.json(
      { message: "Reply sent successfully" },
      { status: 200 }
    );
  } catch (err: unknown) {
    const error = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { message: "Internal server error", error },
      { status: 500 }
    );
  }
}