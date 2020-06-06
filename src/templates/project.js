import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/layout/layout";
import Project from "../components/project";
import "./project.css";

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      url
      tags
      features
      challenges
      github
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
const ProjectPage = ({ data: { projectsJson: project } }) => (
  <Layout home={false}>
    <Project
      title={project.title}
      imageData={project.image.childImageSharp.fluid}
      description={project.description}
      features={project.features}
      challenges={project.challenges}
      tags={project.tags}
      url={project.url}
      github={project.github}
    />
  </Layout>
);

export default ProjectPage;
