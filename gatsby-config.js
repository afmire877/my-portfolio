module.exports = {
  siteMetadata: {
    title: "Ahmed Mire - Web Developer - Portfolio",
    description: `
      This is a blog theme. The description will be showed in SEO results on pages
      without their own descriptions.
    `,
    siteUrl: "https://ahmedmire.com",
    author: {
      name: "Ahmed Mire",
      title: "Web Developer based in London",
      minibio: `
        I am a Web developer that loves automation.
      `,
    },
    org: {
      name: "Level up Web design",
      url: "https://levelupweb.com",
      logo: "https://levelup.com/logo.png",
    },
    social: {
      twitter: "https://twitter.com/fuadcodes",
      github: "https://github.com/afmire877",
      linkedin: "https://www.linkedin.com/in/ahmedmire",
      medium: "https://medium.com/@afmire877",
      dev: "https://dev.to/afmire877",
      resume: "https://www.dropbox.com/s/irxennui6p5rv94/cv-1.pdf?dl=1",
      email: "hello@ahmedmire.com",
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./data/",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/posts`,
      },
    },

    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-vscode`,
            options: {
              theme: "Dark+ (default dark)", // Or install your favorite theme from GitHub
            },
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-transformer-json",
    "gatsby-plugin-react-helmet",

    {
      resolve: `gatsby-plugin-material-ui`,
      options: {
        stylesProvider: {
          injectFirst: true,
        },
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://www.medium.com/feed/@afmire877`,
        name: `GatsbyBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
        parserOption: {
          customFields: {
            item: ["itunes:duration"],
          },
        },
      },
    },
    `gatsby-plugin-styled-components`,
  ],
};
