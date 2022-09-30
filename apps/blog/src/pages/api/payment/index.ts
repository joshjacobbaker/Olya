import Stripe from "stripe"
import { NextApiRequest, NextApiResponse } from "next"

const stripe = new Stripe(process.env.PRIVATE_STRIPE_KEY as string, {
  apiVersion: "2022-08-01",
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
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

      res?.status(200).json({
        message: "Payment successful",
        success: true,
      })
    } catch (e) {
      console.error("Error", e)
      res?.status(403).json({ message: "Payment Failed", success: false })
    }
  }
}
