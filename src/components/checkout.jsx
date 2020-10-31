import React from "react"

const baseStyles = 'flex items-center justify-center px-8 py-3 border border-transparent text-base sm:text-md leading-6 font-semibold rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out'

class Checkout extends React.Component {  
  render() {
    return (
      <a 
        href="https://gum.co/gWKrQ?wanted=true" 
        rel="noreferrer" 
        target="_blank" 
        className={`${baseStyles}`}
      >
        Buy Now · $10
      </a>
    )
  }
}

export default Checkout