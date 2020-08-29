import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";

const useStyles = makeStyles((theme) => ({
  root: {
    border: " 1px solid #ccc",
  },
}));

const HeaderButton = (props) => {
  const classes = useStyles();
  const { textButton, ...other } = props;
  return (
    <button
      {...other}
      className={classNames(
        "border py-1 xs-block px-4 rounded-full ml-5 md:ml-1",
        classes.root
      )}
    >
      {props.textButton}
    </button>
  );
};

export default HeaderButton;
