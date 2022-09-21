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
    const { error, paymentMethod } = await stripe?.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    })

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
    <>
      {!success ? (
        <form className="h-2/3" onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardElement options={CARD_OPTIONS} />
            </div>
            <button>Pay</button>
          </fieldset>
        </form>
      ) : (
        <div>
          <h2>You just bought a sweet spatula!</h2>
        </div>
      )}
      PaymentForm
    </>
  )
}
