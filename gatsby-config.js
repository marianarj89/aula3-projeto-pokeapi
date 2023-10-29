/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [{
    resolve: `gatsby-plugin-manifest`,
    options: {
      icon: `src/images/favicon.png`,
    },
    resolve: `gatsby-source-rest-api`,
    options: {
      endpoints: ["https://freetestapi.com/api/v1/dogs",  "https://randomuser.me/api/"],
  
    },
  }],
};
