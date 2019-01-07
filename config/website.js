const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Outlands Game', // Navigation and Site Title
  siteTitleAlt: 'Outlands', // Alternative Site title for SEO
  siteTitleShort: 'Outlands', // short_name for manifest
  siteUrl: 'https://outlands.netlify.com/', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Promotion site for the Outlands game developed for an university course',

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  // userTwitter: '@cara', // Twitter Username
  // ogSiteName: 'cara', // Facebook Site Name
  // ogLanguage: 'en_US', // Facebook Language

  // Manifest and Progress color
  themeColor: tailwind.colors.orange,
  backgroundColor: tailwind.colors.blue,
}
