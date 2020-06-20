import React, { useEffect } from "react";
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
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          ></div>
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

  @font-face{
      font-family: 'JetBrainsMono';
      src: url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff2/JetBrainsMono-Regular.woff2') format('woff2'),
        url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff/JetBrainsMono-Regular.woff') format('woff'),
        url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/ttf/JetBrainsMono-Regular.ttf') format('truetype');
      font-weight: 400;
      font-style: normal;
    }
  code, 
  code span,
  code span .mtk4 {
    font-family: "JetBrainsMono"!important;
  }
  pre.grvsc-container::after {
    content: "";
    height: 39px;
    width: fit-content;
    padding: 2px 8px;
    color: white;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
    background: #1E1E1E;
    position: absolute;
    font-family: "JetBrainsMono";
    font-weight: 700;
    top: -33px;
    right: 0;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  } 
  pre.grvsc-container  {
    overflow:unset;
    position: relative;
  } 
  pre.grvsc-container[data-language='js'] {
    &::after {
        content: 'JS' ;
    }
  } 
  pre.grvsc-container[data-language='html'] {
    &::after {
        content: 'HTML' ;
    }
  } 
  pre.grvsc-container[data-language='css'] {
    &::after {
        content: 'CSS' ;
    }
  } 
  pre.grvsc-container[data-language='php'] {
    &::after {
        content: 'PHP' ;
    }
  } 

  pre.grvsc-container[data-language='bash'] {
    &::after {
        content: 'BASH' ;
    }
  } 

  pre.grvsc-container[data-language='shell'] {
    &::after {
        content: 'SHELL' ;
    }
  } 


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
