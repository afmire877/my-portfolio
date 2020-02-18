import React from "react";
import Image from "gatsby-image";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Styled from "styled-components";
import CardActionArea from "@material-ui/core/CardActionArea";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";

const Tags = Styled.span`
  text-transform: uppercase;
  font-weight: normal;
  margin-top: 10px;
  padding: 5px 5px;
  font-size: 0.8rem;
  

`;

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    minWidth: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between"
  },
  media: {
    height: 140
  }
});

function ProjectPreview({
  title,
  description,
  slug,
  imageData,
  github,
  tags,
  url
}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea href={`/${slug}`}>
        <Image className={classes.media} fluid={imageData} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>

          {tags.map((tag, i) => {
            return (
              <Tags>
                {i >= 1 ? "◾ " : ``} {tag}
              </Tags>
            );
          })}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ProjectPreview;
