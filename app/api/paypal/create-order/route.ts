import { NextResponse } from "next/server";

const base = process.env.PAYPAL_MODE === "live" ? "https://api-m.paypal.com" : "https://api-m.sandbox.paypal.com";

async function getAccessToken() {
  const client = process.env.PAYPAL_CLIENT_ID;
  const secret = process.env.PAYPAL_CLIENT_SECRET;
  if (!client || !secret) throw new Error("Missing PayPal credentials");

  const auth = Buffer.from(`${client}:${secret}`).toString("base64");
  const res = await fetch(`${base}/v1/oauth2/token`, {
    method: "POST",
    headers: { Authorization: `Basic ${auth}`, "Content-Type": "application/x-www-form-urlencoded" },
    body: "grant_type=client_credentials"
  });
  const data = await res.json();
  if (!res.ok) throw new Error(data?.error_description || "PayPal auth failed");
  return data.access_token as string;
}

export async function POST(req: Request) {
  try {
    const { title, price = "5.00", currency = "USD" } = await req.json();
    const accessToken = await getAccessToken();
    const res = await fetch(`${base}/v2/checkout/orders`, {
      method: "POST",
      headers: { Authorization: `Bearer ${accessToken}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        intent: "CAPTURE",
        purchase_units: [{ description: title || "Brain Vibration eBook", amount: { currency_code: currency, value: price } }]
      })
    });
    const data = await res.json();
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    return NextResponse.json({ error: "Unable to create PayPal order" }, { status: 500 });
  }
}
