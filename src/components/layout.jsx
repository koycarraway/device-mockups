/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Koymoji from "../images/koymoji@2x.png"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={`m-auto max-w-md sm:max-w-xl md:max-w-full`} >
        <main>{children}</main>
        <div className={`pt-20 pb-40 mt-6 text-center`}>
          <p className={`mb-6 text-base sm:text-md md:text-lg text-gray-500 m-auto max-w-lg`}>
          A constantly growing library of pixel-perfect devices for your design mockups and commercial projects.
          </p>
          <div className={`max-w-md mx-auto flex justify-center`}>
            <a href="https://gum.co/device-mockups?wanted=true" class="flex items-center justify-center px-8 py-3 border border-transparent text-base sm:text-md leading-6 font-semibold rounded-full text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out">
              Buy Now · $10
            </a>
          </div>
        </div>
        <footer className={`m-auto text-center pb-10`} >
          <a href="https://twitter.com/koycarraway" target="_blank" rel="noreferrer">
            <img src={Koymoji} alt="Koy Carraway" className={`rounded-full m-auto mb-4`} width="48" height="48" />
          </a>
          <p className={`m-0 text-sm font-medium text-gray-500`} >Designed and built by <a href="https://twitter.com/koycarraway" target="_blank" rel="noreferrer" className="text-gray-100 transition duration-150 ease-in-out hover:text-indigo-400">Koy Carraway</a></p>
          <small className={`m-0 text-xs text-gray-600`}>Copyright © {new Date().getFullYear()} Koy Carraway. All rights reserved.</small>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
