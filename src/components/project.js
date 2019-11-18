import React from "react";
import { Link } from "gatsby";
import Image from "gatsby-image";
import Styled from "styled-components";
import Button from "@material-ui/core/Button";
import Icon from "./Common/icons";
import {
  faArrowLeft,
  faArrowRight,
  faArrowAltCircleLeft,
  faArrowCircleRight,
  faArrowCircleLeft
} from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { device } from "./Common/desktop";
import { css } from "@emotion/core";

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
        grid-row: ${props => (props.row !== 1 ? props.row + 1 : 1)};
        grid-row: ${props => (props.row === 3 ? 6 : "")};
        grid-column: 1/13;

    }
`;

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
  ;
`;

const ProjectPreview = ({
  title,
  description,
  url,
  imageData,
  tags,
  features,
  challenges,
  github
}) => (
  <div className="project">
    <Header>
      {title}
      <div>
        <Tags>
          {tags.map((tag, i) => (
            <span key={`tag-${tag}`}>
              {i === tags.length - 1 ? `${tag}` : `${tag}, `}
            </span>
          ))}
        </Tags>
        <Button
          css={css`
            box-shadow: 1px 1px 3px 0px grey;
            padding: 10px;
            margin-right: 30px;
          `}
          size="small"
          href={`https://github.com/afmire877/${github}`}
          color="primary"
        >
          <Icon
            css={css`
              margin-right: 10px;
            `}
            icon={faGithub}
            size="lg"
          />
          View Source
        </Button>
        <Button
          css={css`
            box-shadow: 1px 1px 3px 0px grey;
            padding: 10px;
          `}
          size="small"
          href={url}
          color="primary"
        >
          Go to Site
        </Button>
      </div>
    </Header>
    <Image fluid={imageData} alt={title} />
    <ContentWrapper>
      <Subheading row={1}>Overview</Subheading>
      <Description>{description}</Description>
      <Subheading row={2}>Challenges and what I learnt</Subheading>
      <Challenges>{challenges}</Challenges>
      <Subheading row={3}>Key Features</Subheading>
      <Features>
        <ul>
          {features.map(i => (
            <li>{i}</li>
          ))}
        </ul>
      </Features>
    </ContentWrapper>
    <p>
      <Button href={url}>
        View this project online{" "}
        <Icon
          css={css`
            margin-left: 10px;
          `}
          icon={faArrowCircleRight}
          size="sm"
        />
      </Button>
    </p>

    <Button>
      <Icon
        css={css`
          margin-right: 10px;
        `}
        href="/"
        icon={faArrowCircleLeft}
        size="sm"
      />
      back to all projects
    </Button>
  </div>
);

export default ProjectPreview;
