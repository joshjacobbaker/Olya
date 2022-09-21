import React, { ReactNode } from "react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"

const stripeTestPromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

const StripeContext = ({ children }: { children: ReactNode }) => {
  return <Elements stripe={stripeTestPromise}>{children}</Elements>
}

export default StripeContext
