import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, device, country, referral } = body;

    // Validate required fields
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // Log the submission
    console.log("Free Trial Request:", {
      email,
      device,
      country,
      referral,
      timestamp: new Date().toISOString(),
    });

    // Send email using Resend
    // Use your verified domain email (coffeedonuttv.com is verified)
    const fromEmail = process.env.RESEND_FROM_EMAIL || "CoffeeDonutTV <noreply@coffeedonuttv.com>";
    
    if (!resend) {
      console.error("RESEND_API_KEY is not set in environment variables!");
      return NextResponse.json(
        { 
          success: false,
          error: "Email service not configured. Please contact support." 
        },
        { status: 500 }
      );
    }

    try {
      const emailResult = await resend.emails.send({
        from: fromEmail,
        to: "CoffeeDonutTV@gmail.com",
        replyTo: email,
        subject: "New Free Trial Request - CoffeeDonutTV",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #050505; color: #ffffff;">
            <h2 style="color: #d4a574; margin-bottom: 20px;">☕ New Free Trial Request</h2>
            
            <div style="background-color: #0a0a0a; padding: 20px; border-radius: 10px; margin-bottom: 20px;">
              <p style="margin: 10px 0;"><strong style="color: #d4a574;">Customer Email:</strong> ${email}</p>
              <p style="margin: 10px 0;"><strong style="color: #d4a574;">Device:</strong> ${device}</p>
              <p style="margin: 10px 0;"><strong style="color: #d4a574;">Country:</strong> ${country}</p>
              <p style="margin: 10px 0;"><strong style="color: #d4a574;">Referral Source:</strong> ${referral}</p>
              <p style="margin: 10px 0;"><strong style="color: #d4a574;">Submitted:</strong> ${new Date().toLocaleString()}</p>
            </div>
            
            <p style="color: #ffffff; margin-top: 20px;">
              Please send the trial login credentials to: <a href="mailto:${email}" style="color: #d4a574;">${email}</a>
            </p>
          </div>
        `,
      });

      console.log("✅ Email sent successfully!", {
        id: emailResult.id,
        to: "CoffeeDonutTV@gmail.com",
        from: fromEmail,
        timestamp: new Date().toISOString(),
      });

      return NextResponse.json(
        { 
          success: true, 
          message: "Your trial request has been submitted successfully! We'll send your login credentials shortly." 
        },
        { status: 200 }
      );
    } catch (emailError) {
      const error = emailError instanceof Error ? emailError : new Error(String(emailError));
      console.error("❌ Error sending email:", {
        error: error,
        message: error.message,
        name: error.name,
        stack: error.stack,
      });
      
      // Return error to user so they know something went wrong
      return NextResponse.json(
        { 
          success: false,
          error: "Failed to send email. Please try again or contact us directly." 
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error submitting trial request:", error);
    return NextResponse.json(
      { error: "Failed to submit trial request. Please try again." },
      { status: 500 }
    );
  }
}
