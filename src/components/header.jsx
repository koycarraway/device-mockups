import React from "react"
import Checkout from "./checkout"

// import HeroBG from "../images/hero-bg@2x.png"
import AppleLogo from "../images/logos/logo-apple.svg"
import GoogleLogo from "../images/logos/logo-google.svg"
import SonyLogo from "../images/logos/logo-sony.svg"
import SamsungLogo from "../images/logos/logo-samsung.svg"
import OnePlusLogo from "../images/logos/logo-oneplus.svg"

const Header = () => (
  <header className={`bg-cover bg-bottom bg-no-repeat`} style={{backgroundImage: `url(${HeroBG})`}} >
    <div className={`m-auto text-center max-w-full pt-12 sm:pt-24 pb-4 md:pb-7 px-4`} >
      <h1 className={`mb-0 font-semibold text-xl sm:text-xxl md:text-xxxl text-white text-opacity-75`} >
        Pixel Perfect
      </h1>
      <h1 className={`font-semibold text-xl sm:text-xxl md:text-xxxl`} >
        <span className={`antialiased bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-indigo-500`}>Device Mockups</span>
      </h1>
      <div className={`hidden sm:block sm:my-6 md:my-8 lg:my-12 opacity-75`}>
        <img className={`inline-block mx-3 sm:mx-5 md:mx-7 mb-0 h-5 sm:h-6 md:h-8 lg:h-full`} src={GoogleLogo} alt="Google" height="40" />
        <img className={`inline-block mx-3 sm:mx-5 md:mx-7 mb-0 h-5 sm:h-6 md:h-8 lg:h-full`} src={SamsungLogo} alt="Samsung" height="40" />
        <img className={`inline-block mx-3 sm:mx-5 md:mx-7 mb-0 h-5 sm:h-6 md:h-8 lg:h-full`} src={AppleLogo} alt="Apple" height="40"/>
        <img className={`inline-block mx-3 sm:mx-5 md:mx-7 mb-0 h-5 sm:h-6 md:h-8 lg:h-full`} src={SonyLogo} alt="Sony" height="40"/>
        <img className={`inline-block mx-3 sm:mx-5 md:mx-7 mb-0 h-5 sm:h-6 md:h-8 lg:h-full`} src={OnePlusLogo} alt="OnePlus" height="40"/>
      </div>
      <p className={`mb-6 text-base sm:text-md md:text-lg text-gray-500 m-auto max-w-lg`}>
      A constantly growing library of pixel-perfect devices for your design mockups and commercial projects.
      </p>
      <div className={`max-w-md mx-auto flex justify-center`}>
        <Checkout />
      </div>
    </div>
  </header>
)

export default Header
