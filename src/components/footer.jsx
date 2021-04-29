import React from "react"
import Koymoji from "../images/config-avatar.png"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const Footer = () => (
  <footer className={`m-auto text-center pb-10`} >
    <div className={`mt-12 mb-32`}>
      <p className={`mb-6 text-base sm:text-md md:text-lg text-gray-500 dark:text-gray-400 m-auto max-w-lg md:max-w-xl`}>
        A growing library of pixel-perfect mobile, tablet, and desktop devices for your design mockups and commercial projects.
      </p>
    </div>
    <OutboundLink href="https://twitter.com/koycarraway" target="_blank" rel="noreferrer">
      <img src={Koymoji} alt="Koy Carraway" className={`rounded-full m-auto mb-4`} width="64" height="64" />
    </OutboundLink>
    <p className={`m-0 text-sm font-medium text-gray-500 dark:text-gray-400`} >
      Designed and built by <OutboundLink href="https://twitter.com/koycarraway" target="_blank" rel="noreferrer" className="text-black transition duration-150 ease-in-out dark:text-gray-100">Koy Carraway</OutboundLink>
    </p>
    <small className={`m-0 text-xs text-gray-500`}>Copyright © {new Date().getFullYear()} Koy Carraway. All rights reserved.</small>
  </footer>
)

export default Footer