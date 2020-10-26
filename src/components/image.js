import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      image1: file(relativePath: { eq: "Apple@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 820, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      image2: file(relativePath: { eq: "Google@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 820, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      image3: file(relativePath: { eq: "Samsung@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 820, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
      image4: file(relativePath: { eq: "More@2x.png" }) {
        childImageSharp {
          fluid(maxWidth: 820, quality: 100) {
            ...GatsbyImageSharpFluid
            ...GatsbyImageSharpFluidLimitPresentationSize
          }
        }
      }
    }
  `)

  // if (!data?.placeholderImage?.childImageSharp?.fluid) {
  //   return <div>Picture not found</div>
  // }

  return <Img fluid={data.image3.childImageSharp.fluid} />
}

// export const deviceShowcaseImage = graphql`
//   fragment deviceShowcaseImage on File {
//     childImageSharp {
//       fluid(maxWidth: 820, quality: 100) {
//         ...GatsbyImageSharpFluid
//         ...GatsbyImageSharpFluidLimitPresentationSize
//       }
//     }
//   }
// `

// export const query = graphql`
//   query {
//     image1: file(relativePath: { eq: "Apple@2x.png" }) {
//       ...deviceShowcaseImage
//     }
//     image2: file(relativePath: { eq: "Google@2x.png" }) {
//       ...deviceShowcaseImage
//     }
//     image3: file(relativePath: { eq: "Samsung@2x.png" }) {
//       ...deviceShowcaseImage
//     }
//     image4: file(relativePath: { eq: "More@2x.png" }) {
//       ...deviceShowcaseImage
//     }
//   }
// `

export default Image
