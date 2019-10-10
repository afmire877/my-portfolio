import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Styled from 'styled-components';



const useStyles = makeStyles({
  card: {
    minWidth: 275,
    gridRow: 7,
    fontFamily: 'Montserrat sans-serif',
    marginBottom: '30px',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    fontSize: 12,
    marginBottom: 12,
  },
});

BlogCard.defualtProps = {
  title: 'Defualt',
  href: '#'
}
const Tag = ({ tag }) =>{ 
const classes = useStyles();
const bull = <span className={classes.bullet}>•</span>;
  return <span>{tag} {bull}</span>
}


export default function BlogCard({title, href, tags, preview}) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
        {title}
        </Typography>
        <Typography className={classes.pos} color="textSecondary" >
          {(tags) ? tags.map((t) => {
            if(!t) return;
            return <Tag tag={t} />
          }) : ''}
        </Typography>
        <Typography >
          {preview}
        </Typography>
      </CardContent>
      <CardActions>
        <Button href={href} size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}