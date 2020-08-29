import React from "react";
import { AppBar, Toolbar, Hidden } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import DesktopHeader from "./DesktopHeader";
import MobileHeader from "components/mobile/header/MobileHeader";
import TopHeader from "components/top-header/TopHeader";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    position: "sticky",
    top: "0px",
    zIndex: "6",
  },
  appBar: {
    color: "black",
    background: "white",
    boxShadow: " 0 1px 0 0 rgba(0,0,0,.05)",
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar} id="Header">
        <TopHeader />
        <Toolbar>
          <Hidden mdUp>
            <MobileHeader />
          </Hidden>
          <Hidden smDown>
            <DesktopHeader />
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
