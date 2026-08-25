import AppointmentConfirmationEmail from "@/components/emails/AppointmentConfirmationEmail";
import { auth, currentUser } from "@clerk/nextjs/server";
import resend from "@/lib/resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { userId } = await auth();
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await currentUser();
    const userEmails = user?.emailAddresses.map(({ emailAddress }) => emailAddress.toLowerCase()) ?? [];

    const body = await request.json();

    const {
      userEmail,
      doctorName,
      appointmentDate,
      appointmentTime,
      appointmentType,
      duration,
      price,
    } = body;

    if (
      !userEmail ||
      !userEmails.includes(String(userEmail).toLowerCase()) ||
      !doctorName ||
      !appointmentDate ||
      !appointmentTime
    ) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: "Opticare <no-reply@resend.dev>",
      to: [userEmail],
      subject: "Appointment Confirmation - Opticare",
      react: AppointmentConfirmationEmail({
        doctorName,
        appointmentDate,
        appointmentTime,
        appointmentType,
        duration,
        price,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json(
      { message: "Email sent successfully", emailId: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}