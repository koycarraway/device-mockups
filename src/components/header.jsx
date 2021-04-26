import React from "react"
import Checkout from "./checkout"
import { graphql, useStaticQuery } from 'gatsby'
import BackgroundImage from 'gatsby-background-image'
import { ReactComponent as AppleLogo } from "../images/logos/logo-apple.svg"
import { ReactComponent as SamsungLogo } from "../images/logos/logo-samsung.svg"
import { ReactComponent as AmazonLogo } from "../images/logos/logo-amazon.svg"
import { ReactComponent as MicrosoftLogo } from "../images/logos/logo-microsoft.svg"
import { ReactComponent as GoogleLogo } from "../images/logos/logo-google.svg"
import { ReactComponent as SonyLogo } from "../images/logos/logo-sony.svg"
import { ReactComponent as OnePlusLogo } from "../images/logos/logo-oneplus.svg"

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
      <div className={`header-content m-auto text-center max-w-full pt-12 sm:pt-20 pb-4 md:pb-0 px-4`} >
        <h1 className={`font-semibold text-xl sm:text-xxl md:text-xxxl tracking-tight text-white`} >
          Device Mockups
        </h1>
        <p className={`mb-6 text-base sm:text-md md:text-lg text-gray-400 dark:text-gray-400 m-auto max-w-lg md:max-w-xl`}>
        A growing library of pixel-perfect mobile, tablet, and desktop devices for your design mockups and commercial projects.
        </p>
        <div className={`max-w-md mx-auto flex justify-center`}>
          <Checkout />
        </div>
        <div className={`hidden sm:block mt-16 opacity-50 text-gray-900 dark:text-white`}>
          <GoogleLogo className={`inline-block sm:mx-3 md:mx-4 my-2 sm:h-7`} />
          <SonyLogo className={`inline-block sm:mx-3 md:mx-4 my-2 sm:h-7`} />
          <MicrosoftLogo className={`inline-block sm:mx-3 md:mx-4 my-2 sm:h-7`} />
          <AppleLogo className={`inline-block sm:mx-3 md:mx-4 my-2 sm:h-7`} />
          <SamsungLogo className={`inline-block sm:mx-3 md:mx-4 my-2 sm:h-7`} />
          <AmazonLogo className={`inline-block sm:mx-3 md:mx-4 my-2 sm:h-7`} />
          <OnePlusLogo className={`inline-block sm:mx-3 md:mx-4 my-2 sm:h-7`} />
        </div>
      </div>
    </BackgroundImage>
  )
}

export default Header
