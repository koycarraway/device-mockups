import PropTypes from "prop-types"
import React from "react"

import SketchLogo from "../images/sketch.svg"
import FigmaLogo from "../images/figma.svg"
import XDLogo from "../images/adobe-xd.svg"

const Header = ({ siteTitle }) => (
  <header className={`mt-10`} >
    <div className={`m-auto text-center max-w-xl py-10 px-4`} >
      <h1 className={`mb-0 font-semibold text-xxl md:text-xxxl text-white text-opacity-25`} >
        Pixel Perfect
      </h1>
      <h1 className={`mb-6 font-semibold text-xxl md:text-xxxl`} >
        <span className={`antialiased bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-500`}>Device Mockups</span>
      </h1>
      <p className={`mb-6  text-md md:text-lg text-gray-500 m-auto max-w-lg`}>
      A constantly growing library of pixel-perfect devices for your design mockups and commercial projects.
      </p>
      <div className={`max-w-md mx-auto sm:flex sm:justify-center`}>
        <a href="https://gum.co/device-mockups" class="flex items-center justify-center px-8 py-3 border border-transparent text-md leading-6 font-semibold rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out">
          Buy Now · $10
        </a>
      </div>
      <div className={`mt-20`}>
        <h4 className={`text-base font-medium text-gray-700`}>Available for</h4>
        <div className={`flex w-48 m-auto`}>
          <img className={`flex-1`} src={SketchLogo} alt="Sketch" />
          <img className={`flex-1`} src={FigmaLogo} alt="Figma" />
          <img className={`flex-1`} src={XDLogo} alt="Adobe XD" />
        </div>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
