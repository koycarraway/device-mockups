import React from "react"

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

// You can delete this file if you're not using it

export const onRenderBody = ({setPostBodyComponents}) => {
  setPostBodyComponents([
    <script
      src="https://gumroad.com/js/gumroad.js"
      type="text/javascript"
    />,
  ])
}