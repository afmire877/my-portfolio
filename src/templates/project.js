import React from 'react';
import './project.css'
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import Project from '../components/project';
import Styled from 'styled-components';

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      url
      tags
      features
      challenges
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
const Hero = Styled.div`
  background: #2634F2;
`;


const ProjectPage = ({ data: { projectsJson: project } }) => (
  <Layout
    home={false}
  >
    <Project
      title={project.title}
      imageData={project.image.childImageSharp.fluid}
      description={project.description}
      features={project.features}
      challenges={project.challenges}
      tags={project.tags}
      url={project.url}
    />
  </Layout>
);

export default ProjectPage;
