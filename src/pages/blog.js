import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout/layout';
import Styled from 'styled-components';
import ReadMins from '../components/readMins';

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            status
            path
          }
          timeToRead
        }
      }
    }
  }
`;

const BlogPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;
  return (
    <div>
      <Layout home={false} style={{ backgroundColor: '#f8f8f8' }}>
        {posts.map((item, index) => {
          const { excerpt, frontmatter, timeToRead } = item.node;
          return (
            frontmatter.status && (
              <BlogItem href={frontmatter.path} key={index}>
                <Title>{frontmatter.title}</Title>

                <div
                  css={`
                    grid-column: 1/8;
                    display: flex;
                  `}
                >
                  <p
                    css={`
                      margin-right: 30px;
                    `}
                  >
                    {frontmatter.date}
                  </p>
                  <ReadMins time={timeToRead} />
                </div>

                <Excerpt>{excerpt}</Excerpt>
              </BlogItem>
            )
          );
        })}
      </Layout>
    </div>
  );
};

// const BlogItem = Styled.a;
// const Tag = Styled.a`
//     display: FLEX;
//     justify-content: CENTER;
//     align-items: CENTER;
//     align-self: CENTER;
//     grid-column: 8/9;
//     width: 100%;
//     color: black;
//     background: #F0DB4F;
//     border-radius: 16.5px;
//     padding: 10px;
//     -webkit-text-decoration: none;
//     text-decoration: none;
//     max-height: 35px;
//     font-size: 0.9rem;
//     text-align: center;
// `;

const BlogItem = Styled.a`
    grid-column: 3/12;
    color: black;
    font-size: 0.8rem;
    text-decoration: none;
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    padding: 20px;
    border-radius: 5px;
    grid-template-rows: repeat(auto-fill, minmax(40px, 1fr)); 
    @media (max-width:500px){
      & {
        grid-column: 1 / 13;
      }
    }
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

export default BlogPage;
