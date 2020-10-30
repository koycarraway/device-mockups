import React from "react"
import PropTypes from "prop-types"
import { trackCustomEvent } from 'gatsby-plugin-google-analytics'

const baseStyles = 'flex items-center justify-center px-8 py-3 border border-transparent text-base sm:text-md leading-6 font-semibold rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out'

const Checkout = (props) => (
  <a 
    href="https://gum.co/device-mockups?wanted=true" 
    rel="noreferrer" 
    className={`${baseStyles}`}
    onClick={e => {
      // To stop the page reloading
      e.preventDefault()
      // Lets track that custom click
      trackCustomEvent({
        // string - required - The object that was interacted with (e.g.video)
        category: "Buy Button",
        // string - required - Type of interaction (e.g. 'play')
        action: "Click",
        // string - optional - Useful for categorizing events (e.g. 'Spring Campaign')
        label: "Buy Now",
        // number - optional - Numeric value associated with the event. (e.g. A product ID)
        // value: 43
      })
    }}
  >
    {props.label} · {props.price}
  </a>
)

Checkout.propTypes = {
  label: PropTypes.string,
  price: PropTypes.string
}

Checkout.defaultProps = {
  label: `Buy Now`,
  price: `$10`,
}

export default Checkout