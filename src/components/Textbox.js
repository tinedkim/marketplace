
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
          multiline
          rows ={4}
          variant="outlined"
        />
      </ThemeProvider>
    </form>
  );
}
