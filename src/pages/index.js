import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ProjectPreview from '../components/project-preview';
import Grid from '@material-ui/core/Grid';

export const query = graphql`
  {
    allProjectsJson {
      edges {
        node {
          title
          description
          slug
          tags
          image {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;
 

export default ({ data }) => (
  <Layout>
    <Grid container spacing={3}>
    {data.allProjectsJson.edges.map(({ node: project }) => (
      <Grid item xs={12} sm={6} >
      <ProjectPreview
        key={`preview-${project.slug}`}
        title={project.title}
        description={project.description}
        slug={project.slug}
        imageData={project.image.childImageSharp.fluid}
        tags={project.tags}
      />
      </Grid>
    ))}
    </Grid>
  </Layout>
);
