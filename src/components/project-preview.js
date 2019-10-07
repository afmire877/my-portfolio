import React from 'react';
import Image from 'gatsby-image';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Styled from 'styled-components';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


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
  },
  media: {
    height: 140,
  },
});

function ProjectPreview({ title, description, slug, imageData, github, tags}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea href={`/${slug}`}>
      <Image className={classes.media} fluid={imageData} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>

          
      {tags.map((tag,i)  => {return <Tags>{i>=1 ? '◾' : ``}  {tag}</Tags>})}
          

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" href={`/${slug}`} color="primary">
          <faGithub />View Source
        </Button>
        <Button size="small" href={`/${github}`} color="primary">
          Demo
        </Button>
      </CardActions>
    </Card>
  );
}


// const ProjectPreview = ({ title, description, slug, imageData }) => (
//   <div className="project-preview">
//     <Link to={`/${slug}/`}>
//       <Image fluid={imageData} alt={title} />
//     </Link>
//     <h2>
//       <Link to={`/${slug}/`}>{title}</Link>
//     </h2>
//     <p>{description}</p>
//     <p>
//       <Link to={`/${slug}/`}>View this project &rarr;</Link>
//     </p>
//   </div>
// );

export default ProjectPreview;
