import './blog.css';
import React, { Fragment } from 'react';
import Heading from '../Common/heading';
import BlogCard from './blogCard';
import { StaticQuery, graphql } from 'gatsby'
import Styled from 'styled-components';

const ContentWrapper = Styled.div`
    display: flex;
    grid-row: 7;
    grid-column-gap: 50px;
    grid-column: 2/12;
    -webkit-align-items: start;
    -webkit-box-align: start;
    -ms-flex-align: start;
    align-items: start;
    justify-content: space-around;
    flex-wrap: wrap;

`;



export default () => (
    <StaticQuery
    query={graphql`
    {
        allFeedGatsbyBlog {
          nodes {
              title
              categories
              content {
                  encoded
              }

          }
        }
      }      
    `}
    render={({
        allFeedGatsbyBlog: {
            nodes
        }
    }) => {

        return (
            <Fragment >
                <Heading title={'Blog'} />
                <ContentWrapper>

                    {nodes.map((node, index) => {
                        if(index >= 3) return;
                        return <BlogCard title={node.title} tags={node.categories} preview={node.content.encoded} />
                    })
                    }
                </ContentWrapper>
                
            </Fragment>
        )

}
}
/>
)
