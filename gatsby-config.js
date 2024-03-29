module.exports = {
  siteMetadata: {
    title: `Gatsby with Drupal on DDEV`,
  },
  plugins: [
    {
      resolve: `gatsby-source-drupal`,
      options: {
        // baseUrl: `https://live-contentacms.pantheonsite.io/`,
        // apiBase: `api`,
        baseUrl: `http://umami-demo.ddev.site/`,
        apiBase: `jsonapi`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-93349937-2`,
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-glamor`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`,
      },
    },
  ],
}
