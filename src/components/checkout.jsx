import React from "react"
import PropTypes from "prop-types"

const baseStyles = 'flex items-center justify-center px-8 py-3 border border-transparent text-base sm:text-md leading-6 font-semibold rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out'

const Checkout = (props) => (
  <a href="https://gum.co/device-mockups?wanted=true" rel="noreferrer" className={`${baseStyles}`}>
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