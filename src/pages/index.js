import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import Contact from '../components/Contact/Contact';
import Hero from '../components/Hero/index';
import Projects from '../components/Projects/projects';
import About from '../components/About/about';
import Blog from '../components/Blog/blog';

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
  <div>
  <Layout>
    <Hero />
    <Projects data={data} />
    <About />
    <Blog />
  </Layout>
  <Contact />
  </div>

);
