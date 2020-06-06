import React from "react";
import { graphql } from "gatsby";
import Styled, { createGlobalStyle } from "styled-components";
import NavBar from "../components/Navbar/navbar";
import Meta from "../components/blogMeta";
import { blogStyles } from "../components/utils/typography";
import ReactHtmlParser from "react-html-parser";

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html, timeToRead } = markdownRemark;
  return (
    <>
      <NavBar />
      <Container>
        <GlobalStyles />
        <div className="blog-post">
          <Title>{frontmatter.title}</Title>
          <Meta date={frontmatter.date} timeToRead={timeToRead} />
          <div className="blog-post-content">{ReactHtmlParser(html)}</div>
        </div>
      </Container>
    </>
  );
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        status
      }
      timeToRead
    }
  }
`;

const GlobalStyles = createGlobalStyle`
${blogStyles}
`;

const Container = Styled.div`

  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

@media (min-width: 768px) {
  
    width: 750px;

}
@media (min-width: 992px) {
  
    width: 970px;

}
@media (min-width: 1200px) {
  
    width: 1170px;

}`;
const Title = Styled.h1`
    text-align: center;
    font-weight: 800;
    color: #2634f2;
    margin-bottom: 50px;
`;
