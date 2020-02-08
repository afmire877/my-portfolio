import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/index";
import Projects from "../components/Projects/projects";
import About from "../components/About/about";

export const query = graphql`
  {
    allProjectsJson {
      edges {
        node {
          title
          description
          slug
          tags
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
    }
  }
`;

export default ({ data }) => (
  <div>
    <Layout home={true}>
      <Hero />
      <Projects data={data} />
      <About />
    </Layout>
    <Contact />
  </div>
);
