import React from "react";
import { Icon, IconButton } from "@material-ui/core";
import classNames from "classnames";
import { makeStyles } from '@material-ui/core/styles';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "store/dialog";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    color: "black",
    width: 60,
    height: 60,
  },
  logo: {
    flex: " 1 0 auto",
    lineHeight: 0,
    paddingRight: "65px",
  },
  headerWidth: {
    width: "100%",
    boxShadow: "0 1px 0 0 rgba(0, 0, 0, .05)",
    zIndex: 30,
  },
}));

const ModalHeader = ({ closeDialog, title }) => {
  const classes = useStyles();

  return (
    <div
      className={classNames(
        classes.headerWidth,
        "flex flex-row items-center justify-between bg-white fixed"
      )}
    >
      <div className="inline-block">
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={closeDialog}
        >
          <Icon className="text-lg text-black">close</Icon>
        </IconButton>
      </div>
      <div
        className={classNames(classes.logo, "text-center text-lg font-bold")}
      >
        {title}
      </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      closeDialog: Actions.closeDialog,
    },
    dispatch
  );
}

export default connect(null, mapDispatchToProps)(ModalHeader);
