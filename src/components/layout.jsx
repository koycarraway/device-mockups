/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import DarkModeToggle from "./darkModeToggle"
import Header from "./header"
import Footer from "./footer"
import "./reset.css"
import "./style.css"
import "./carousel.css"
import "./medium-zoom.css"

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
      <DarkModeToggle />
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <main className={`m-auto max-w-lg sm:max-w-xl md:max-w-3xl lg:max-w-full dark:bg-black`} >
        {children}
      </main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
