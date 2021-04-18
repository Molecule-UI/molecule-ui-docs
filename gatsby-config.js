/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

const path = require("path")

module.exports = {
  /* Your site config here */
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-mdx",
    "gatsby-plugin-react-helmet",
    // {
    //   resolve: "gatsby-plugin-page-creator",
    //   options: {
    //     path: path.join(__dirname, "src", "mdx"),
    //   },
    // },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "markdown",
        path: path.join(__dirname, "src", "markdown"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "assets"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "styles",
        path: path.join(__dirname, "src", "mdx", "styles"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "components",
        path: path.join(__dirname, "src", "mdx", "components"),
      },
    },
  ],
}
