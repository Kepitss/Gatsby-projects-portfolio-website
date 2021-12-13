/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: "Mārtiņš Ķepīts",
    motto: `We think context matters`,
    description: `Our work appears regularly in both mainstream and industry specific publications.`,
    titleTemplate: "%s | Gatsby Project",
    url: "https://gatsby-projects-portfolio.netlify.app", // No trailing slash allowed!
    image: "/main-img.png", // Path to the image placed in the 'static' folder, in the project's root directory.
    twitterUsername: "@kepits_martins",
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-plugin-dark-mode",
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Raleway", "Nova Flat", "Poppins"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Defaults to 100
        collectionTypes: [`Projects`],
        singleTypes: [`about-us`],
      },
    },
  ],
}
