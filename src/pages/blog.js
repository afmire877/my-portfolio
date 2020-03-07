import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout/layout";
import Styled from "styled-components";
import Meta from "../components/blogMeta";

import ReadMins from "../components/readMins";

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            path
          }
          timeToRead
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
        {posts.map(item => {
          const { excerpt, frontmatter, timeToRead } = item.node;
          return (
            <BlogItem href={frontmatter.path}>
              <Title>{frontmatter.title}</Title>
              <Tag>JavaScript</Tag>
              <Meta date={frontmatter.date} timeToRead={timeToRead} />
              <Excerpt>{excerpt}</Excerpt>
            </BlogItem>
          );
        })}
      </Layout>
    </div>
  );
};

const BlogItem = Styled.a`
  grid-column: 3/12;
  color: black;
  font-size: 0.8rem;
  text-decoration: none;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  padding: 20px;
  border-radius: 5px;
  &:hover {
      box-shadow: -1px 10px 29px 0px rgba(0,0,0,0.2);
    }
`;
const Tag = Styled.a`
    grid-column: 8/9;
    width: 100%;
    color: black;
    background: #F0DB4F; 
    border-radius: 16.5px;
    padding: 10px ;
    -webkit-text-decoration: none;
    text-decoration: none;
    max-height: 35px;
    font-size: 0.9rem;
    text-align: center;

 
`;

const Title = Styled.h1`
  grid-column: 1/8;
  font-weight: 900;
  color: #2634F2;
  padding: 10px 10px 10px 0;
  margin-bottom: 20px;
`;

const Excerpt = Styled.p`
  margin-top: 30px;
  grid-column: 1/9;
`;
