import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";
import { openDialog } from "store/dialog";
import { bindActionCreators } from "redux";

import OrderModal from "./OrderModal";

const useStyles = makeStyles((theme) => ({
  divid: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  menuIcon: {
    width: "24px",
    height: " 24px",
    display: "inline-block",
    backgroundSize: "24px 24px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  dialogPaper: {
    height: "100%",
    width: "100%",
    margin: 0,
    maxWidth: "none",
    borderRadius: 0,
  },
}));

const orderIcon = {
  src: "/static/images/header/order.svg",
  alt: "order",
};

const MobileUserOrder = ({ openDialog }) => {
  const classes = useStyles();
  
  const OrderButton = () => (
    <button
      onClick={() =>
        openDialog({
          children: <OrderModal />,
          fullScreen: true,
          scroll: "body",
          classes: { paper: classes.dialogPaper },
        })
      }
      className={classNames("text-black flex items-center p-5 text-md w-full")}
    >
      <div className={classes.menuIcon}>
        <img alt={orderIcon.alt} src={orderIcon.src} />
      </div>
      <div className="rtl:mr-2 ltr:ml-2">
        <FormattedMessage id="header.myOrders" defaultMessage="My Orders" />
      </div>
    </button>
  );
  return <OrderButton />;
};
function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      openDialog,
    },
    dispatch
  );
}
export default connect(null, mapDispatchToProps)(MobileUserOrder);
