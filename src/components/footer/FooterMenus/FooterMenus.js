import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";

import FooterColumn from "./FooterColumn";
import FooterColumnInfo from "./FooterColumnInfo";

const useStyles = makeStyles((theme) => ({
  root: {
    color: " #b0b0b0",
  },
}));

const FooterMenus = (props) => {
  const classes = useStyles();

  return (
    <div
      className={classNames(
        "hidden px-8 py-4 md:px-32 md:py-12 md:flex md:flex-row flex-wrap md:justify-between justify-start",
        classes.root
      )}
    >
      <FooterColumn />
      <FooterColumnInfo />
    </div>
  );
};

export default FooterMenus;
