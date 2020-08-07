import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';


const useStyles = makeStyles({
  root: {
    width: 250,
    borderRadius: 10,
    display:"inline-block"
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9,
    marginTop:'30'
  },
  clickable: {
    border: "none",
    outline: "none",
  },
  filter:{
    color: '#F7B748',
    lineHeight: '10%',
    fontSize: '0.8em',
    marginBottom: '1.5em'
  },
  name:{
    color: '#12517A',
    lineHeight: '50%',
    fontSize: '1.5em'
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
      <CardMedia
        image={require('../references/litho.jpeg')}
        title="Product Name"
        className = {classes.media}
      />
      <CardContent className = {classes.content}>
        <h5 className = {classes.filter}>Product Filter/Category</h5>
        <h1 className = {classes.name}>PRODUCT NAME</h1>
      </CardContent>
      <CardActions>
        <h5 className = {classes.price}>$100.00</h5>
      </CardActions>
    </Card>
  )
}
