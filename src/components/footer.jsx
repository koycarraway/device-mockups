import React from "react"
import Koymoji from "../images/koytoyface-purple.png"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const Footer = () => (
  <footer className={`m-auto text-center pb-10`} >
    <OutboundLink href="https://twitter.com/koycarraway" target="_blank" rel="noreferrer">
      <img src={Koymoji} alt="Koy Carraway" className={`rounded-full m-auto mb-4`} width="48" height="48" />
    </OutboundLink>
    <p className={`m-0 text-sm font-medium text-gray-500`} >
      Designed and built by <OutboundLink href="https://twitter.com/koycarraway" target="_blank" rel="noreferrer" className="text-black transition duration-150 ease-in-out dark:text-gray-100">Koy Carraway</OutboundLink>
    </p>
    <small className={`m-0 text-xs text-gray-600`}>Copyright © {new Date().getFullYear()} Koy Carraway. All rights reserved.</small>
  </footer>
)

export default Footer