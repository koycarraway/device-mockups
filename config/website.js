module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "portfolio"
  title: 'Device Mockups', // Navigation and Site Title
  titleAlt: 'Device Mockups', // Title for JSONLD
  description: 'A constantly growing library of pixel-perfect devices for your design mockups and commercial projects.',
  headline: 'Pixel Perfect Device Mockups', // Headline for schema.org JSONLD
  url: 'https://devicemockups.design', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  logo: 'src/images/Thumbnail.png', // Used for SEO
  ogLanguage: 'en_US', // Facebook Language

  // JSONLD / Manifest
  favicon: 'src/favicon.png', // Used for manifest favicon generation
  shortName: 'DeviceMocks', // shortname for manifest. MUST be shorter than 12 characters
  author: 'Koy Carraway', // Author for schemaORGJSONLD
  themeColor: '#3D63AE',
  backgroundColor: '#EBEDF2',

  twitter: '@koycarraway', // Twitter Username
  facebook: 'koycarraway', // Facebook Site Name
  // googleAnalyticsID: 'UA-XXX',
}