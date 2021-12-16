module.exports = {
  siteMetadata: {
    title: `iraklitbz`,
    description: `Geta web`,
    author: `iraklitbz@gmail.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `geta web`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2a6df4`,
        theme_color: `#2a6df4`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // Directory with the strings JSON
        path: `${__dirname}/src/intl`,
        // Supported languages
        languages: [`en`, `ge`],
        // Default site language
        defaultLanguage: `en`,
        // Redirects to `/pt` in the route `/`
        redirect: true,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://geta-server.herokuapp.com`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`Blog`, `Ge`]
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
					require(`autoprefixer`)(),
          require(`postcss-calc`)(),
        ],
      },
    },
    // This (optional) plugin enables PurgeCSS to reduce the size of CSS loaded.
    // Some additional configuration may be required.
    // To learn more, visit: https://www.gatsbyjs.com/plugins/gatsby-plugin-purgecss/
    // {
    //   resolve: `gatsby-plugin-purgecss`,
    //   options: {
    //     whitelist: [
    //       "html",
    //       "body",
    //     ],
    //   },
    // },
    // This (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
