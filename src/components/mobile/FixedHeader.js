import React from "react";
import { Link } from "react-router-dom";
import { Icon, IconButton } from "@material-ui/core";
import classNames from "classnames";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  header: {
    boxShadow: "0px 0px 0px 1px rgba(0,0,0,.03)",
    zIndex: 5,
    height: "64px",
    top:"95px"
  }
}));

const FixedHeader = ({ link, title }) => {
  const classes = useStyles();

  return (
    <div
      className={classNames(
        classes.header,
        "flex flex-row flex-no-wrap w-full items-center justify-between bg-white sticky"
      )}
    >
      <IconButton aria-label="close">
        <Link to={link}>
          <Icon className="text-lg text-black">arrow_back</Icon>
        </Link>
      </IconButton>

      <div
        className={classNames(
          classes.logo,
          "text-center text-lg font-bold mx-auto"
        )}
      >
        {title}
      </div>
    </div>
  );
};
export default FixedHeader;
