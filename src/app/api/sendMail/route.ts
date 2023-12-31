import { sendMail } from "@/lib/mailservice";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  const {
    data: { user, car },
  } = await req.json();
  try {
    await sendMail(
      "Get your car evaluation from EveryCarBuyer.",
      user.email,
      car
    );
    return Response.json({ status: 200, message: "Email send successfully." });
  } catch (error) {
    return Response.json({ status: 400, error: error });
  }
}
