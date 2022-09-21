import React from "react"
import PaymentForm from "../../components/PaymentForm"
type Props = {}

function Stripe({}: Props) {
  return (
    <div>
      <h1>Stripe Spatula Store</h1>
      <PaymentForm></PaymentForm>
    </div>
  )
}

export default Stripe
