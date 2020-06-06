const path = require(`path`);
exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const result = await graphql(`
    {
      allProjectsJson {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  if (result.error) {
    reporter.panic("There was a problem loading your projects!");
    return;
  }

  result.data.allProjectsJson.edges.forEach(({ node: { slug } }) => {
    createPage({
      path: `/${slug}/`,
      component: require.resolve("./src/templates/project.js"),
      context: { slug },
    });
  });

  const blogresult = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
              status
              description
              date
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (blogresult.errors) {
    reporter.panicOnBuild(`Error while running loading Blog posts.`);
    return;
  }
  blogresult.data.allMarkdownRemark.edges.forEach(({ node }) => {
    if (node.frontmatter.status) {
      createPage({
        path: node.frontmatter.path,
        component: path.resolve(`src/templates/blogTemplate.js`),
        context: {}, // additional data can be passed via context
      });
    }
  });
};
