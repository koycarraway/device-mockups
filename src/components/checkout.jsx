import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const baseStyles = 'flex items-center justify-center px-8 py-3 border border-transparent text-base sm:text-md leading-6 font-semibold rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out'

class Checkout extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.gtag("event", "add_to_cart", { 
      currency: 'USD',
      items: [{
        item_name: 'device_mockup_bundle',
        price: 10.00
      }],
      value: 10.00
    })
    console.log("Buy Now button clicked")
  }

  render() {
    return (
      <OutboundLink href="https://gum.co/device-mockups?wanted=true" onClick={this.handleClick} className={`${baseStyles}`}>
        Buy Now · $10
      </OutboundLink>
    )
  }
}

export default Checkout