// app/api/razorpay/orders/route.ts
import { NextResponse } from "next/server";
import Razorpay from "razorpay";

// Initialize with your credentials from env:
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(request: Request) {
  const { amount, currency, receipt } = await request.json();
  // amount in paise
  const options = {
    amount: amount * 100,
    currency: currency ?? "USD",
    receipt,
    payment_capture: 1,
  };
  const order = await razorpay.orders.create(options);
  return NextResponse.json({ order });
}
