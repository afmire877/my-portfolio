module.exports = {
  siteMetadata: {
    title: 'Ahmed Mire - Front End Dev',
    description: `
      This is a blog theme. The description will be showed in SEO results on pages
      without their own descriptions.
    `,
    siteUrl: 'https://ahmedmire.com',
    image: 'https://lengstorf.com/images/jason-lengstorf.jpg',
    author: {
      name: 'Ahmed',
      minibio: `
        I am a front end developer that loves automation.
      `,
    },
    org: {
      name: 'Level up Web design',
      url: 'https://levelupweb.com',
      logo: 'https://levelup.com/logo.png',
    },
    social: {
      twitter: '@fuadcodes',
      fbAppID: '',
    },
    
  },
  pathPrefix: "/reponame",
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-json',
    'gatsby-plugin-react-helmet',
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

  ],
  
};
