import React, { useEffect } from 'react';
import { graphql } from 'gatsby';
import Styled, { createGlobalStyle } from 'styled-components';
import NavBar from '../components/Navbar/navbar';
import Meta from '../components/blogMeta';
import { blogStyles } from '../components/utils/typography';

export default function Template({ data }) {
  const { markdownRemark } = data;
  const { frontmatter, html, timeToRead } = markdownRemark;

  useEffect(() => {
    let blogContent = document.querySelector('.blog-post-content');
    blogContent.querySelectorAll('pre.grvsc-container').forEach(item => {
      item.outerHTML = `
      <div class= "lang-tabbed_container">
        <div class="lang-tabbed-item">
          ${item.dataset.language.toUpperCase()}
        </div>
        ${item.outerHTML}
      </div>
      `;
    });
  }, [html]);

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
  .blog-post-content {
    max-width: 900px;
    padding-top: 150px;
    margin: 0 auto;
  }
  .lang-tabbed_container {
    position: relative;

  }
  .lang-tabbed-item {
    font-size: 0.9rem;
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
