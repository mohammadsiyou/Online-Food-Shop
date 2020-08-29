import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#646464",
  },
}));

const FooterColumnTitle = (props) => {
  const classes = useStyles();

  return (
    <h3
      className={classNames(
        "text-xl text-black font-semibold mb-8",
        classes.title
      )}
    >
      {props.title}
    </h3>
  );
};

export default FooterColumnTitle;
