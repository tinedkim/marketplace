import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Search from './Search';
//ICONS
import CreateRoundedIcon from '@material-ui/icons/CreateRounded'; //custom
import BuildRoundedIcon from '@material-ui/icons/BuildRounded'; //tools
import SafetyIcon from '@material-ui/icons/VerifiedUserRounded'; //saftey
import EcoRoundedIcon from '@material-ui/icons/EcoRounded'; //agriculture
import LocalLaundryServiceRoundedIcon from '@material-ui/icons/LocalLaundryServiceRounded'; //cleaning
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'; //solar
import DevicesRoundedIcon from '@material-ui/icons/DevicesRounded'; //electronics
import BusinessRoundedIcon from '@material-ui/icons/BusinessRounded'; //office
import LocalShippingRoundedIcon from '@material-ui/icons/LocalShippingRounded'; //raw materials
import AccountBoxIcon from '@material-ui/icons/AccountBox'; //account
import SettingsIcon from '@material-ui/icons/Settings'; //settings

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
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
    zIndex: 1
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
}));

export default function ClippedDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
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
        <ListItem button>
          <ListItemIcon><CreateRoundedIcon/></ListItemIcon>
          <ListItemText primary = "Customized"/>
        </ListItem>
        <ListItem button>
          <ListItemIcon><BuildRoundedIcon/></ListItemIcon>
          <ListItemText primary = "Tools"/>
        </ListItem>
        <ListItem button>
          <ListItemIcon><SafetyIcon/></ListItemIcon>
          <ListItemText primary = "Safety"/>
        </ListItem>
        <ListItem button>
          <ListItemIcon><EcoRoundedIcon/></ListItemIcon>
          <ListItemText primary = "Agricultural Equipment"/>
        </ListItem>
        <ListItem button>
          <ListItemIcon><LocalLaundryServiceRoundedIcon/></ListItemIcon>
          <ListItemText primary = "Cleaning Equipment"/>
        </ListItem>
        <ListItem button>
          <ListItemIcon><WbSunnyRoundedIcon/></ListItemIcon>
          <ListItemText primary = "Solar"/>
        </ListItem>
        <ListItem button>
          <ListItemIcon><DevicesRoundedIcon/></ListItemIcon>
          <ListItemText primary = "Electronics"/>
        </ListItem>
        <ListItem button>
          <ListItemIcon><BusinessRoundedIcon/></ListItemIcon>
          <ListItemText primary = "Office Supplies"/>
        </ListItem>
        <ListItem button>
          <ListItemIcon><LocalShippingRoundedIcon/></ListItemIcon>
          <ListItemText primary = "Raw Material"/>
        </ListItem>
      </List>
      <Divider />
      <List>
        {['Your Account', 'Settings'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <AccountBoxIcon/> : <SettingsIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
        </div>
      </Drawer>

      <main className={classes.content}>
        <Toolbar />
      </main>
    </div>
  );
}


