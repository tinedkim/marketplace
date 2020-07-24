<<<<<<< HEAD

import React from "react";
import {
  ThemeProvider,
  makeStyles,
  createMuiTheme
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    '& .MuiTextField-root': {
        marginTop: '2em',
        width: '50ch',
      },
  },
}));

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#12517A"
    }
  }
});

export default function CustomizedInputs() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
      <ThemeProvider theme={theme}>
        <TextField
          id="outlined-textarea"
          label="Customizations"
          placeholder="Colors, comments,"
=======
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      marginTop: '2em',
      width: '50ch',
    },
  },
}));

export default function MultilineTextFields() {
  const classes = useStyles();
  const [value, setValue] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-textarea"
          label="Customizations"
          placeholder="Colors, comments, etc."
>>>>>>> c2c6257a49c286b7de2f4cff8c305f8824bc3132
          multiline
          rows ={4}
          variant="outlined"
        />
<<<<<<< HEAD
      </ThemeProvider>
=======
      </div>
>>>>>>> c2c6257a49c286b7de2f4cff8c305f8824bc3132
    </form>
  );
}
