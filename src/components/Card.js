import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const styles = 
{
media: {
  height: 0,
  paddingTop: '56.25%', // 16:9,
  marginTop:'30'
}
  };

const useStyles = makeStyles({
  root: {
    width: 250,
    borderRadius: 10,
  },
  filter:{
    color: '#F7B748',
    lineHeight: '10%'
  },
  name:{
    color: '#12517A',
    lineHeight: '50%'
  },
  content:{
    textAlign: "left",
    fontFamily: "Roboto"
  },
  price:{
    paddingLeft: 10,
    lineHeight: '0.1%',
  }
});

export default function MediaCard() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
          image={require('../references/litho.jpeg')}
          title="Contemplative Reptile"
          style={styles.media}
          />
          <CardContent className = {classes.content}>
            <h5 className = {classes.filter}>Product Filter/Category</h5>
            <h2 className = {classes.name}>PRODUCT NAME</h2>
          </CardContent>
        </CardActionArea>
      <CardActions>
        <h3 className = {classes.price}>$100.00</h3>
      </CardActions>

    </Card>
  )
}
