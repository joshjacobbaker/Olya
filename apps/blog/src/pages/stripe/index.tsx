import React from "react"
import Image from "next/image"
import PaymentForm from "../../components/PaymentForm"
import StripeContextELement from "../../context/stripeContext"
type Props = {}

function Stripe({}: Props) {
  return (
    <StripeContextELement>
      <h1>Stripe Spatula Store</h1>
      <Image src="/images/stickFigure.png" alt="stick figure" width="50px" height="50px" />
      <PaymentForm></PaymentForm>
    </StripeContextELement>
  )
}

export default Stripe
