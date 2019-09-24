module.exports = {
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: './data/'
      }
    },
    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    // {
    //   resolve: 'gatsby-source-sanity',
    //   options: {
    //     projectId: 'pbyz1190',
    //     dataset: 'production',
    //     watchMode: true
    //   }
    // }
  ]
};
