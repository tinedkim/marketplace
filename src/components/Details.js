import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '../components/Card';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Select from '../components/Select';
import Textbox from '../components/Textbox';
import FavoriteIcon from '@material-ui/icons/Favorite';
import "typeface-roboto";
import TextField from '@material-ui/core/TextField';


export default function ScrollDialog() {
  const [open, setOpen] = React.useState(false);
  const [scroll, setScroll] = React.useState("paper");

  const images= [
                  <img src={require('../references/litho.jpeg')} alt = "litho"/>,
                  <img src={require('../references/frame.jpeg')} alt = "litho"/>,
                  <img src={require('../references/frame.jpeg')} alt = "litho"/>,
                  <img src={require('../references/litho.jpeg')} alt = "litho"/>,
                  <img src={require('../references/frame.jpeg')} alt = "litho"/>,
                  <img src={require('../references/frame.jpeg')} alt = "litho"/>
                ]

  const handleClickOpen = scrollType => () => {
    setOpen(true);
    setScroll(scrollType);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      zIndex: 9999,
    },
    button:{
      "&:focus": {
        outline: "0",
      },
      margin: "2vh 0vh"
    },
    container:{
      borderRadius: 10,
      display: "flex",
      marginLeft: 10
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
    grid:{
      padding: 75,
      fontFamily: "Roboto",
    },
    image:{
      height: 120,
      width: 200,
      padding: 10,
      textAlign: 'center',
    },
    productTitle:{
      color: "#12517A",
      fontWeight: "bold",
      disableTypography: true,
    },
    wishlist:{
      display: 'flex',
      justifyContent: 'flex-end',
      float: 'right',
      color: "#12517A"
    }
  }));

  const classes = useStyles();
  return (
    <div>
        <Button onClick={handleClickOpen("paper")} className = {classes.button}><Card/></Button>
      <Dialog
        open={open}
        onClose={handleClose}
        scroll={scroll}
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
        className = {classes.dialog}
        fullWidth= {true}
        maxWidth = "lg"
      >
        <DialogTitle id="scroll-dialog-title" className = {classes.productTitle}>
          BY PRODUCTHUB
          <Button onClick={handleClose} className = {classes.wishlist} border={0}>
            <FavoriteIcon/>
          </Button>
        </DialogTitle>
        <DialogContent dividers={scroll === "paper"}>
          <DialogContentText
            id="scroll-dialog-description"
            ref={descriptionElementRef}
            tabIndex={-1}
          >
            <Grid container spacing={5}>
              <Grid item xs={6} className = {classes.grid}>
                <Carousel autoPlay>
                  {images}
                </Carousel>
              </Grid>
              <Grid item xs={6}>
                <h1 style={{color: '#12517A', fontSize: "2em", lineHeight: '20%', marginTop: '0.7em'}}>Product Name</h1>
                <h5 style={{color: '#F7B748', fontWeight: 400, lineHeight: '200%'}}>Vendor Name</h5>
                <h2 style={{color: '#000000', fontWeight: 400}}>$100.00 USD</h2> 
                <strong>Product Details</strong><br />
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit 
                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum. <br />
                <Textbox />
                <Select/> <br />
                <TextField
                  id="outlined-read-only-input"
                  label="Total Cost"
                  defaultValue="Cost * Quantity"
                  InputProps={{
                    readOnly: true,
                  }}
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Buy Now
          </Button>
          <Button onClick={handleClose} color="primary">
            Add to Cart
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
