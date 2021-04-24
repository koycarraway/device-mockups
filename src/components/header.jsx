import React from "react"
import Checkout from "./checkout"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { ReactComponent as AppleLogo } from "../images/logos/logo-apple.svg"
import { ReactComponent as SamsungLogo } from "../images/logos/logo-samsung.svg"
import { ReactComponent as AmazonLogo } from "../images/logos/logo-amazon.svg"
import { ReactComponent as MicrosoftLogo } from "../images/logos/logo-microsoft.svg"
import { ReactComponent as GoogleLogo } from "../images/logos/logo-google.svg"
import { ReactComponent as SonyLogo } from "../images/logos/logo-sony.svg"
import { ReactComponent as OnePlusLogo } from "../images/logos/logo-oneplus.svg"

// import HeroBG from "../images/hero-bg@2x.png"

import DarkMode from "./darkMode"

const Header = ({ className }) => {
  const data = useStaticQuery(
    graphql`
      query {
        desktop: file(relativePath: { eq: "hero-bg-dark@2x.png" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  // Set ImageData.
  const imageData = data.desktop.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="header"
      className={className}
      fluid={imageData}
      fadeIn='soft'
      backgroundColor={`#000`}
    >
      <DarkMode />
      <div className={`header-content m-auto text-center max-w-full pt-12 sm:pt-24 pb-4 md:pb-7 px-4`} >
        <h1 className={`font-semibold text-xl sm:text-xxl md:text-xxxl tracking-tight antialiased bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-purple-600`} >
          Device Mockups
        </h1>
        <div className={`hidden sm:block sm:my-6 md:my-8 lg:my-12 opacity-75 text-gray-900 dark:text-white`}>
          <GoogleLogo className={`inline-block mx-3 sm:mx-5 md:mx-7 mb-0 h-5 sm:h-6 md:h-8`} />
          <SonyLogo className={`inline-block mx-3 sm:mx-5 md:mx-7 mb-0 h-5 sm:h-6 md:h-8`} />
          <MicrosoftLogo className={`inline-block mx-3 sm:mx-5 md:mx-7 mb-0 h-5 sm:h-6 md:h-8`} />
          <AppleLogo className={`inline-block mx-3 sm:mx-5 md:mx-7 mb-0 h-5 sm:h-6 md:h-8`} />
          <SamsungLogo className={`inline-block mx-3 sm:mx-5 md:mx-7 mb-0 h-5 sm:h-6 md:h-8`} />
          <AmazonLogo className={`inline-block mx-3 sm:mx-5 md:mx-7 mb-0 h-5 sm:h-6 md:h-8`} />
          <OnePlusLogo className={`inline-block mx-3 sm:mx-5 md:mx-7 mb-0 h-5 sm:h-6 md:h-8`} />
        </div>
        <p className={`mb-6 text-base sm:text-md md:text-lg text-gray-400 dark:text-gray-600 m-auto max-w-lg`}>
        A constantly growing library of pixel-perfect devices for your design mockups and commercial projects.
        </p>
        <div className={`max-w-md mx-auto flex justify-center`}>
          <Checkout />
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Header
