import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { reg } = await request.json();

  const url =
    "https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles";

  const headerConf: any = {
    "Content-Type": "application/json",
    "x-api-key": process.env.DVLA_API_KEY,
  };

  const res = await fetch(url, {
    method: "POST",
    headers: headerConf,
    body: JSON.stringify({
      registrationNumber: reg,
    }),
  });

  const data = await res.json();

  return Response.json({ data });
}
