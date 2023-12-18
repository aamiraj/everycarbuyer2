import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { reg } = await request.json();

  const url =
    "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles";

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": process.env.NEXT_PUBLIC_API_KEY,
    },
    body: JSON.stringify({
      registrationNumber: reg,
    }),
  });

  const data = await res.json();

  return Response.json({ data });
}
