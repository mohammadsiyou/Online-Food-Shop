import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import Language from "./Language";
import Currency from "./Currency";

const useStyles = makeStyles({
  root: {
    height: "32px",
    background: "#f7f7f7",
    boxShadow: "none",
    borderBottom: "none",
    fontSize: "14px",
    lineHeight: "14px",
    color: "#737373",
    position: "relative",
    zIndex: "20",
  },
  container: {
    height: "100%",
    maxWidth: "1400px",
    margin: "0px auto",
    display: "flex",
    justifyContent: "end",
  },
});

const TopHeader = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Currency />
        <Language />
      </div>
    </div>
  );
};

export default TopHeader;
