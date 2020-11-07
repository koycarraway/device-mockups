/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Koymoji from "../images/koymoji@2x.png"

import Header from "./header"
import "./layout.css"
import "./carousel.css"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className={`m-auto max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-full`} >
        <main>{children}</main>
        <footer className={`m-auto text-center pb-10`} >
          <OutboundLink href="https://twitter.com/koycarraway" target="_blank" rel="noreferrer">
            <img src={Koymoji} alt="Koy Carraway" className={`rounded-full m-auto mb-4`} width="48" height="48" />
          </OutboundLink>
          <p className={`m-0 text-sm font-medium text-gray-500`} >
            Designed and built by <OutboundLink href="https://twitter.com/koycarraway" target="_blank" rel="noreferrer" className="text-gray-100 transition duration-150 ease-in-out hover:text-indigo-400">Koy Carraway</OutboundLink>
          </p>
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
