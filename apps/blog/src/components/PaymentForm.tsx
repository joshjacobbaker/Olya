import React, { useState } from "react"
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans",
      fontSize: "16px",
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "ffc7ee",
    },
  },
}

type Props = {}

export default function PaymentForm({}: Props) {
  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("Payment Process Started")
    const { error, paymentMethod } = await stripe?.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    })
    console.log("Payment Method Created")
    if (!error) {
      try {
        const { id } = paymentMethod
        const response = axios.post("http:localhost:3000/payment", {
          amount: 1000,
          id,
        })

        if (response.data.success) {
          console.log("Successful Payment")
          setSuccess(true)
        }
      } catch (e) {
        console.error("Error", e)
      }
    }
  }
  return (
    <div className="h-screen w-screen flex flex-col">
      {!success ? (
        <form className="h-2/3 bg-zinc-300 p-4 m-10" onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement />
            </div>
            <button className="px-4 py-2 bg-blue-400 rounded-lg">Pay</button>
          </fieldset>
        </form>
      ) : (
        <div>
          <h2>You just bought a sweet spatula!</h2>
        </div>
      )}
      PaymentForm
    </div>
  )
}
