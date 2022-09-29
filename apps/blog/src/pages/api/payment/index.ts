import Stripe from "stripe"
import { NextRequest, NextResponse } from "next/server"

const stripe = new Stripe(process.env.PRIVATE_STRIPE_KEY)

export default async function handler(req: NextRequest, res: NextResponse) {
  if (req.method === "POST") {
    let { id, amount } = req.body
    console.log("id", id, "amount", amount)
    try {
      const payment = await stripe.paymentIntents.create({
        amount,
        currency: "USD",
        description: "Spatula Company fake data",
        payment_method: id,
        confirm: true,
      })

      console.log("Payment", payment)

      res.status(200).json({
        message: "Payment successful",
        success: true,
      })
    } catch (e) {
      console.error("Error", e)
      res.status().json({ message: "Payment Failed", success: false })
    }
  }
}
