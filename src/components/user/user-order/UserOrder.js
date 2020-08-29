import React from "react";
import { DialogContent } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from "react-intl";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "store/dialog";

import FixedModalHeader from "../../product/product-menu-Modal/FixedModalHeader";
import UserOrderContent from "./UserOrderContent";

const useStyles = makeStyles((theme) => ({
  root: {
    borderTop: "solid 1px #f5f5f5",
    backgroundColor: " #fafafa",
    padding: "16px",
  },
  dialog: {
    backgroundColor: " #fafafa",
    borderTop: "solid 1px #f5f5f5",
    borderBottom: "solid 1px #f5f5f5",
	padding:24,
  },
}));

const UserOrder = ({ closeDialog }) => {
  const classes = useStyles();

  return (
    <>
      <FixedModalHeader
        closeDialog={closeDialog}
        title={
          <FormattedMessage id="header.myOrders" defaultMessage="My Orders" />
        }
      />
      <DialogContent dividers={false} className={classes.dialog}>
        <UserOrderContent />
      </DialogContent>
    </>
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

export default connect(null, mapDispatchToProps)(UserOrder);
