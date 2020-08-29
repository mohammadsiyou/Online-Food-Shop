import React, { useCallback, useReducer } from "react";
import { IconButton, Icon } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { addAddress, editAddress, removeAddress } from "store/user";
import * as Actions from "store/dialog";

import UserAddressInput from "./UserAddressInput";

const useStyles = makeStyles((theme) => ({
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  title: {
    height: "30px",
    border: "1px solid rgb(255, 224, 51)",
    padding: " 6px 25px 5px 10px",
    overflow: "hidden",
    fontSize: "16px",
    whiteSpace: "nowrap",
    borderRadius: "4px",
    marginBottom: "10px",
    "&:hover": {
      backgroundColor: "rgb(255, 224, 51)",
      fontWeight: "bold",
      cursor: "pointer",
    },
  },
  editIcon: {
    position: "absolute",
    right: "45px",
    marginTop: "-2px",
  },
  submitBtn: {
    border: " 1px solid rgb(255, 224, 51)",
    background: "rgb(255, 224, 51)",
    borderRadius: "3px",
  },
  moreBtn: {
    border: " 1px solid #f5f5f5",
    background: "#f5f5f5",
    borderRadius: "3px",
    fontWeight: "normal",
  },
}));

const initialState = {
  id: null,
  address: null,
  open: false,
};

const reducer = (state, { field, value }) => ({ ...state, [field]: value });

const UserAddress = ({ closeDialog, addressList }) => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  const { address, open } = state;

  const selectAddress = (item) => {
    dispatch({ field: "address", value: item });
  };

  const goToBack = useCallback(() => {
    dispatch({ field: "address", value: null });
    dispatch({ field: "open", value: false });
  }, []);

  const openAddressForm = () => {
    dispatch({ field: "open", value: true });
  };
  return (
    <div className="relative">
      <IconButton
        aria-label="close"
        className={classes.closeButton}
        onClick={closeDialog}
      >
        <Icon color="action">close</Icon>
      </IconButton>
      <div className="text-md py-12 px-10">
        <div className="text-4xl mb-8">
          <h1>
            <FormattedMessage
              id="header.myAddresses"
              defaultMessage="My Addresses"
            />
          </h1>
        </div>
        {open || address ? (
          <>
            <UserAddressInput address={address} goToBack={goToBack} />
          </>
        ) : (
          addressList.map((item, index) => (
            <div
              key={index}
              className={classes.title}
              onClick={() => selectAddress(item)}
            >
              {item.description}
              <Icon className={classes.editIcon}>edit</Icon>
            </div>
          ))
        )}
        {!open && (
          <div className="flex flex-row mt-3">
            <button
              className={classNames(
                classes.moreBtn,
                "text-center w-1/3 px-2 py-4 mt-5 text-base"
              )}
              onClick={openAddressForm}
            >
              <FormattedMessage
                id="home.userAddress.AddMore"
                defaultMessage="Add more"
              />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return { addressList: state.user.addressList };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      closeDialog: Actions.closeDialog,
      addAddress,
      editAddress,
      removeAddress,
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAddress);
