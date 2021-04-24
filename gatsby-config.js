module.exports = {
  siteMetadata: {
    title: `Device Mockups`,
    description: `A constantly growing library of pixel-perfect devices for your design mockups and commercial projects.`,
    author: `@koycarraway`,
    keywords: `device, mockups, iphone, apple, google, pixel, samsung, oneplus, sony`,
    siteUrl: `https://devicemockups.design`,
    image: `src/images/cover-image.png`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-dark-mode`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")]
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        develop: false,
        tailwind: true,
        ignore: ['components/']
      }
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: true, // optional parameter to include script in development
        id: 2071520,
        sv: 6,
      },
    },
    // {
    //   resolve: `gatsby-plugin-csp`,
    //   options: {
    //     disableOnDev: true,
    //     mergeScriptHashes: false,
    //     mergeStyleHashes: false,
    //     directives: {
    //       "script-src": "'self' 'unsafe-inline' www.google-analytics.com https://www.googletagmanager.com/ https://gumroad.com/js/gumroad.js https://assets.gumroad.com",
    //       "style-src": "'self' 'unsafe-inline'",
    //       "img-src": "'self' data: https://google.com/ads https://www.google.com/ads/ga-audiences https://analytics.google.com www.google-analytics.com https://gumroad.com",
    //       "frame-src": "'self' https://gumroad.com",
    //       "connect-src": "'self' https://analytics.google.com https://www.google-analytics.com https://stats.g.doubleclick.net https://stats.g.doubleclick.net/j s3.amazonaws.com/gumroad www.google.com www.gstatic.com *.facebook.com *.facebook.net files.gumroad.com/ *.braintreegateway.com www.paypalobjects.com *.paypal.com *.braintree-api.com gumroad.com"
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-RVEHB28TQP", // Google Analytics - Global Site Tag
          "UA-181585210-1", // Google Universal Analytics
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        // gtagConfig: {
        //   optimize_id: "OPT_CONTAINER_ID",
        //   anonymize_ip: true,
        //   cookie_expires: 0,
        // },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
        },
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
