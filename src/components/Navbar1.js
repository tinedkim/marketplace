import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import logo from "../references/logo.png";
import Header from './Header';
import Search from './Search';
import Footer from './Footer';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  header: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#12517A",
    position: 'fixed',
  },
  search: {
    height: 65,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: 'auto',
    height: '200vh',
    backgroundColor: "#F7B748",
  },
  content: {
    flexGrow: 1,
  },
  footer: {
    zIndex: theme.zIndex.drawer + 1,
    marginLeft: 0,
    marginBottom: 0,
    position: 'absolute',
    top: '400vh',
    bottom: 0,
  },
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar className={classes.header}>
        <Toolbar>
          <a>
            <img src={logo} style={{ width: "160px" }} alt = "logo" noWrap/>
          </a>
          <Header />
        </Toolbar>
      </AppBar>

      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
        <div className= {classes.search}>
          <Search/>
        </div>
        <Divider />
      <List>
        {['Customized', 'Tools', 'Safety', 'Agricultural Equipments', 'Cleaning Equipments',
        'Solar', 'Electronics', 'Office Supplies', 'Raw Material'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Your Account', 'Settings'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
        </div>
      </Drawer>

      <main className={classes.content}>
        <Toolbar />
      </main>
      <AppBar className={classes.footer}>
        <Toolbar>
          <Footer  />
        </Toolbar>
      </AppBar>
    </div>
  );
}


