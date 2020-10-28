import React, { useState } from "react"
import { loadStripe } from "@stripe/stripe-js"

const buttonStyles = 'flex items-center justify-center px-8 py-3 border border-transparent text-base sm:text-md leading-6 font-semibold rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out'

// const buttonDisabledStyles = {
//   opacity: "0.5",
//   cursor: "not-allowed",
// }

let stripePromise
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe("pk_live_iaZUGKVH9iP4xtNM3k9TT3e800w4ox8LKo")
  }
  return stripePromise
}

const Checkout = () => {
  const [loading, setLoading] = useState(false)

  const redirectToCheckout = async event => {
    event.preventDefault()
    setLoading(true)

    const stripe = await getStripe()
    const { error } = await stripe.redirectToCheckout({
      mode: "payment",
      lineItems: [{ price: "price_1HhKYiGNHo6Gl0n06tuZKjyh", quantity: 1 }],
      successUrl: `http://localhost:8000/page-2/`,
      cancelUrl: `http://localhost:8000/`,
    })

    if (error) {
      console.warn("Error:", error)
      setLoading(false)
    }
  }

  return (
    <button
      disabled={loading}
      className={`${buttonStyles}`}
      onClick={redirectToCheckout}
    >
      Buy Now · $10
    </button>
  )
}

export default Checkout