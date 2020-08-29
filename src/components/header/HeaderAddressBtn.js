import React, { useState } from "react";
import { Icon } from "@material-ui/core";
import classNames from "classnames";
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { openDialog } from "store/dialog";
import LocationModal from "components/location/LocationModal";

const useStyles = makeStyles((theme) => ({
  root: {
    border: " 1px solid #ccc",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    maxWidth: "300px",
  },
  addresebtn: {
    borderRight: "0",
    borderTopRightRadius: "0px",
    borderBottomRightRadius: "0px",
    width: "360px",
  },
  cartBtn: {
    borderTopLeftRadius: "0",
    borderBottomLeftRadius: "0",
    background: "rgb(255, 224, 51)",
    borderColor: "rgb(255, 224, 51)",
    width: "100px",
  },
  hidden: {
    display: "none",
  },
  location: {
    width: "350px",
  },
  nearIcon: {
    fontSize: 20,
    paddingTop: "0.10rem",
	marginRight:4,
  },
}));

const HeaderAddressBtn = (props) => {
  const classes = useStyles();
  
  const [changeBtn, setChangeBtn] = useState(false);
  const { openDialog, location } = props;

  const toggleButton = () => {
    setChangeBtn(!changeBtn);
    openDialog({
      children: <LocationModal />,
      maxWidth: "md",
      fullWidth: true,
      fullScreen: false,
      scroll: "body",
      classes: { paper: "m-0 md:m-48" },
    });
  };
  return location ? (
    <>
      <button
        className={classNames(
          "flex items-center border py-1 xs-block px-4 rounded-full ml-5",
         classes.root,
          changeBtn ? classes.addresebtn : null
        )}
        onClick={toggleButton}
      >
        <Icon color="inherit" className={classes.nearIcon}>
          near_me
        </Icon>
        <span className={classes.location}>{location.description}</span>
      </button>

    </>
  ) : (
    <></>
  );
};

const mapStateToProps = (state) => ({
  location: state.location.current,
});

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      openDialog,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderAddressBtn);