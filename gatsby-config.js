require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` })

const getEnv = name => (process.env[name] ? process.env[name] : '')

module.exports = {
  siteMetadata: {
    title: `Chris Rodgers`,
    description: `Portfolio and blog site for Chris Rodgers - software engineer / web developer`,
    author: `Chris Rodgers`,
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
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
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: getEnv('CONTENTFUL_SPACE_ID'),
        accessToken: getEnv('CONTENTFUL_ACCESS_TOKEN'),
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Oswald'],
        },
      },
    },
  ],
}
