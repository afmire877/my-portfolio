import React, { useState } from 'react';
import Image from 'gatsby-image';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Styled from 'styled-components';
import CardActionArea from '@material-ui/core/CardActionArea';

// const Tags = Styled.span`
//   text-transform: uppercase;
//   font-weight: normal;
//   margin-top: 10px;
//   padding: 5px 5px;
//   font-size: 0.8rem;

// `;
const Title = Styled.h4`
    position: absolute;
    z-index: 100;
    top: 50%;
    color: white;
    width: fit-content;
    left: 50%;
    opacity: ${props => (props.isShown ? '1' : '0')};;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease-in;
    `;

const useStyles = makeStyles({
  media: {
    height: 200,
  },
});

const ProjectPreview = ({ title, slug, imageData }) => {
  const [isShown, setIsShown] = useState(false);
  const classes = useStyles();
  return (
    <ProjectCard
      className={classes.card}
      onMouseEnter={() => setIsShown(true)}
      onMouseLeave={() => setIsShown(false)}
    >
      <CardActionArea href={`/${slug}`}>
        <Image
          className={classes.media}
          fluid={imageData}
          alt={title}
          loading="lazy"
        />
        <Title isShown={isShown}>{title}</Title>
      </CardActionArea>
    </ProjectCard>
  );
};
const ProjectCard = Styled(Card)`
  max-width: 345px;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  & picture {
    transition: all 0.3s ease-in;
  }
  &:hover picture{
      opacity: 0.5!important;
  }
  & a {
    background: black;
  }
`;
export default ProjectPreview;
