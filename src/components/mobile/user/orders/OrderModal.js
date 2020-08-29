import React from "react";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { makeStyles } from '@material-ui/core/styles';
import { connect } from "react-redux";

import ModalHeader from "../ModalHeader";

const useStyles = makeStyles((theme) => ({
  divid: {
    backgroundColor: "rgba(0, 0, 0, 0.05)",
  },
  price: {
    border: "1px solid #b0b0b0",
    padding: " 2px 6px",
    borderRadius: "4px",
  },
  status: {
    color: "#b0b0b0",
  },
  submitBtn: {
    border: " 1px solid rgb(255, 224, 51)",
    background: "rgb(255, 224, 51)",
    borderRadius: "8px",
  },
  borderBottom: {
    borderBottom: "1px solid #eee",
  },
}));

const OrderModal = ({ orderList }) => {
  const classes = useStyles();

  return (
    <>
      <ModalHeader
        title={
          <FormattedMessage id="header.myOrders" defaultMessage="My Orders" />
        }
      />
      <div className="mt-20">
        {orderList.map((item) => (
          <div
            key={item.id}
            className={classNames(classes.borderBottom, "m-4")}
          >
            <div className="flex text-lg font-semibold mt-3">
              <div> {item.restaurant} </div>
              <div className={classNames(classes.price, "rtl:mr-auto ltr:ml-auto")}>
                <span>{item.totalPrice}</span> <span className="text-xs">₽</span>
              </div>
            </div>
            <div className="flex mt-3 text-base">
              {item.date}
              <span className={classes.status}>
                —
                <FormattedMessage
                  id="home.mobileSearchInput.Cancel"
                  defaultMessage="Cancel"
                />
              </span>
            </div>
            <div>
              <div className="flex mt-3 text-base">
                <div> {item.itemName} </div>
                <div className="rtl:mr-auto ltr:ml-auto">{item.itemQuantity}×</div>
                <div><span> {item.itemPrice}</span> <span className="text-xs">₽</span></div>
              </div>
            </div>
            <div className="flex flex-col mt-3 text-base">
              <div>
                <FormattedMessage
                  id="home.orderModal.ToChoose"
                  defaultMessage="To choose"
                />
              </div>
              <div className={classNames(classes.status, "mt-3")}>
                + {item.optionItemQuantity} × {item.optionItemName}
              </div>
            </div>
            <button
              className={classNames(
                classes.submitBtn,
                "text-center font-bold w-full px-2 py-3 my-6 text-base"
              )}
            >
              <FormattedMessage
                id="home.userOrderContent.Repeat"
                defaultMessage="Repeat"
              />
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

function mapStateToProps(state) {
  return { orderList: state.user.orderList };
}

export default connect(mapStateToProps)(OrderModal);
