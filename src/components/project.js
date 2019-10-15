import React from 'react';
import { Link } from 'gatsby';
import Image from 'gatsby-image';
import Styled from 'styled-components';
import Button from '@material-ui/core/Button';
import Icon from './Common/icons'
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import { device } from './Common/desktop';


const ContentWrapper = Styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-column: 2/4;
  grid-row-gap: 50px;
  margin-top: 100px;
  @media ${device.mobileL} {
      padding: 10px;
      font-size: 1.1rem;
    }
`;

const Header = Styled.div`
  grid-row: 1;
  grid-column: 1/13;
  text-align: center;
  padding: 50px;
  font-size: 3rem;
  font-weight: 600;
  @media ${device.mobileL} {
      padding: 10px;
    }
`;
const Subheading = Styled.h3`
  grid-row: ${props => props.row};
  grid-column: 1/4;
  
  @media ${device.mobileL} {
        grid-row: ${props => props.row !== 1 ? props.row +1 : 1 };
        grid-row: ${props => props.row === 3 ? 6  : '' };
        grid-column: 1/13;

    }
`

const Description = Styled.p`
  grid-row: 1;
  grid-column: 4/13;
  padding: 0 20px;
  @media ${device.mobileL} {
    grid-row: 2;
    padding: 0;
    grid-column: 1/13;

    }

`;

const Challenges = Styled.p`
  grid-row: 2;
  grid-column: 4/13;
  padding: 0 20px;
  @media ${device.mobileL} {
        grid-row: 4;
        grid-column: 1/13;
        padding: 0 ;
        

    }

`;

const Features = Styled.p`
  grid-row: 3;
  grid-column: 4/13;
  padding: 0 20px;
  @media ${device.mobileL} {
        grid-row: 7;
        grid-column: 1/13;
        padding: 0 ;

    }
`;
const Tags = Styled.div`
  font-size: 2rem;
  font-weight: 300;
  text-align: center;
  padding: 5px 0;
  @media ${device.mobileL} {
        font-size: 1rem;
    }
`;

const IconWrapper = Styled.span`
  margin-right: 10px;
`;

const ProjectPreview = ({ title, description, url, imageData, tags }) => (
  <div className="project">
    <Header>
      {title}
      <div>
        <Tags>
          {tags.map((tag, i)=> (<span key={`tag-${tag}`}>{i === tags.length-1 ? `${tag}` : `${tag}, `}</span>))}
        </Tags>
        <Button size="small" href={`https://github.com/afmire877/`} color="primary">
          <IconWrapper>
            <Icon icon={faGithub} size="2x" /> 
          </IconWrapper>
            View Source
        </Button>
        <Button size="small" href={url} color="primary">
        Demo
        </Button>
      </div>
    </Header>
    <Image fluid={imageData} alt={title} />
    <ContentWrapper>
      <Subheading row={1}>Overview</Subheading>
      <Description>{description}</Description>
      <Subheading row={2}>Challenges and what I learnt</Subheading>
      <Challenges>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus sed distinctio, rerum excepturi iure incidunt, animi neque illum eum minima voluptatem qui enim libero repellat totam saepe culpa. Fugiat, laboriosam.
      </Challenges>
      <Subheading row={3}>Key Features</Subheading>
      <Features>
        <ul>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, esse.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, esse.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, esse.</li>
          <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, esse.</li>
        </ul>
      </Features>

      </ContentWrapper>
      <p>
        <a href={url}>View this project online &rarr;</a>
      </p>

      <p>
        <Link to="/">&larr; back to all projects</Link>
      </p>

  </div>
);

export default ProjectPreview;
