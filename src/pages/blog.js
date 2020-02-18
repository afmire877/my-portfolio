import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Styled from "styled-components";

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;

export default ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <div>
      <Layout home={false} style={{ backgroundColor: "#f8f8f8" }}>
        {posts.map(item => (
          <BlogItem href="htpps://google.com">
            <Title>{item.node.frontmatter.title}</Title>
            <Meta>Published on {item.node.frontmatter.date}</Meta>
            <Excerpt>{item.node.excerpt}</Excerpt>
          </BlogItem>
        ))}
      </Layout>
    </div>
  );
};

const BlogItem = Styled.a`
  grid-column: 3/12;
  color: black;
  text-decoration: none;
`;

const Title = Styled.h1`
  font-weight: 800;
  color: #2634F2;
  margin-bottom: 20px;
`;

const Excerpt = Styled.p`
  margin-top: 30px;
`;
const Meta = Styled.p`
  font-size: 13px;
  color: #777;
  
`;
