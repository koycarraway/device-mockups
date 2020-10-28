import React from "react"

import SketchLogo from "../images/sketch.svg"
import FigmaLogo from "../images/figma.svg"
import XDLogo from "../images/adobe-xd.svg"
import HeroBG from "../images/hero-bg@2x.png"
import Checkout from "./checkout"

const Header = () => (
  <header className={`bg-cover bg-bottom bg-no-repeat`} style={{backgroundImage: `url(${HeroBG})`}} >
    <div className={`m-auto text-center max-w-xl pt-12 sm:pt-24 md:pt-32 pb-4 md:pb-7 px-4`} >
      <h1 className={`mb-0 font-semibold text-xl sm:text-xxl md:text-xxxl text-white text-opacity-75`} >
        Pixel Perfect
      </h1>
      <h1 className={`mb-2 sm:mb-6 font-semibold text-xl sm:text-xxl md:text-xxxl`} >
        <span className={`antialiased bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-500`}>Device Mockups</span>
      </h1>
      <p className={`mb-6 text-base sm:text-md md:text-lg text-gray-500 m-auto max-w-lg`}>
      A constantly growing library of pixel-perfect devices for your design mockups and commercial projects.
      </p>
      <div className={`max-w-md mx-auto flex justify-center`}>
        <Checkout />
        {/* <a href="https://gum.co/device-mockups?wanted=true" class="flex items-center justify-center px-8 py-3 border border-transparent text-base sm:text-md leading-6 font-semibold rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out">
          Buy Now · $10
        </a> */}
      </div>
      <div className={`mt-12 sm:mt-15 md:mt-20`}>
        <h2 className={`text-base font-medium text-gray-700`}>Available for</h2>
        <div>
          <img className={`inline-block mx-4`} src={SketchLogo} alt="Sketch" height="36" />
          <img className={`inline-block mx-4`} src={FigmaLogo} alt="Figma" height="36"/>
          <img className={`inline-block mx-4`} src={XDLogo} alt="Adobe XD" height="36"/>
        </div>
      </div>
    </div>
  </header>
)

export default Header
