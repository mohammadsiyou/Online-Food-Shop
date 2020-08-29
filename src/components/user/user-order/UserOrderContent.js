import React from "react";
import classNames from "classnames";
import { Divider } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    backgroundColor: " #fafafa",
  },
  grayColor: {
    color: "#b0b0b0",
  },
  orderDate: {
    flex: "0 0 32%",
  },
  orderRestaurant: {
    flex: " 0 0 28%",
  },
  orderPrice: {
    flex: " 0 0 12%",
    textAlign: "right",
  },
  orderStatus: {
    flex: " 0 0 28%",
    color: "#b0b0b0",
    textAlign: "right",
  },
  itemName: {
    flex: " 0 0 52%",
  },
  itemQuantity: {
    flex: "0 0 8%",
    color: "#b0b0b0",
  },
  itemPrice: {
    flex: " 0 0 12%",
  },
  submitBtn: {
    border: " 1px solid rgb(255, 224, 51)",
    background: "rgb(255, 224, 51)",
    borderRadius: "3px",
  },
});
const UserOrderContent = ({ orderList }) => {
  const classes = useStyles();

  return orderList.map((item) => (
    <div className={classNames(classes.root)} key={item.id}>
      <Divider />
      <div className="flex flex-row font-bold justify-between mt-4 text-base">
        <div className={classes.orderDate}>{item.date}</div>
        <div className={classes.orderRestaurant}>{item.restaurant}</div>
        <div className={classes.orderPrice}>{item.totalPrice} ₽</div>
        <div className={classes.orderStatus}>
          <FormattedMessage
            id="home.mobileSearchInput.Cancel"
            defaultMessage="Cancel"
          />
        </div>
      </div>
      <div className={classNames(classes.grayColor, "text-base mt-4")}>
        № {item.id}
      </div>
      <div className="flex text-base mt-4">
        <div className={classes.itemName}>{item.itemName}</div>
        <div className={classNames(classes.itemQuantity, "rtl:text-left ltr:text-right")}>
          {item.itemQuantity}
        </div>
        <div
          className={classNames(classes.itemPrice, "rtl:text-left ltr:text-right font-semibold")}
        >
          {item.itemPrice} ₽
        </div>
      </div>
      <div className="flex text-lg mb-4">
        <button
          className={classNames(
            classes.submitBtn,
            "text-center font-bold w-1/5 p-2 mt-5 text-base mr-5 hidden"
          )}
        >
          <FormattedMessage
            id="home.userOrderContent.Repeat"
            defaultMessage="Repeat"
          />
        </button>
      </div>
      <Divider />
    </div>
  ));
};

function mapStateToProps(state) {
  return { orderList: state.user.orderList };
}

export default connect(mapStateToProps)(UserOrderContent);
