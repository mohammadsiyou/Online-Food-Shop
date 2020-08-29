import React from "react";
import { IconButton, Icon } from "@material-ui/core";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fullScreen: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    fontWeight: "bold",
  },
  infoRoot: {
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#fafafa",
  },
  header: {
    boxShadow: "0px 0px 0px 1px rgba(0,0,0,.03)",
    zIndex: 5,
    height: "64px",
    top:"95px"
  },
  content: {
    flex: "1 1 auto",
    zIndex: "0",
    minHeight: "1px",
    position: "relative",
    display: "flex",
  },
  delivery: {
    borderTop: "1px solid #f5f5f5",
    flex: " 0 0 auto",
    padding: "20px 16px",
    display: "flex",
    position: "relative",
    backgroundColor: "white",
  },
  deliveryIcon: {
    flex: "0 0 40px",
    height: "40px",
    marginRight: "10px",
    backgroundImage: "url(/static/images/icons/motor-bike-block.svg)",
  },
  deliveryText: {
    flex: " 1 1 auto",
  },
  deliveryFee: {
    color: "#b0b0b0",
    fontSize: "14px",
    whiteSpace: "nowrap",
  },
  promoImageWrap: {
    flex: "0 0 40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    marginRight: "10px",
    borderRadius: "4px",
    justifyContent: "center",
    backgroundColor: "#83eabc",
  },
  promoImage: {
    height: "20px",
  },
  promoSubTitle: {
    color: "#b0b0b0",
    fontSize: "12px",
    paddingTop: "6px",
  },
  itemsRoot: {
    marginTop: "10px",
    background: "white",
    borderTop: "1px solid #f5f5f5",
  },
  items: {
    display: "flex",
    padding: "15px 16px 15px 0",
    fontSize: "14px",
    marginLeft: "16px",
    borderBottom: "1px solid #f5f5f5",
  },
  promoSummery: {
    display: "flex",
    padding: "15px 16px 15px 0",
    fontSize: "14px",
    marginLeft: "16px",
    alignItems: "center",
    borderBottom: "1px solid #f5f5f5",
  },
  itemsQuantity: { lineHeight: "1.43" },
  itemsCounter: {
    padding: "0 12px 0 10px",
    lineHeight: "1.43",
  },
  itemsTitle: {
    lineHeight: "1.43",
  },
  itemsPrice: {
    flex: "0 0 auto",
    color: "#b0b0b0",
    fontSize: "14px",
    marginLeft: "auto",
    paddingLeft: "20px",
  },
  promoSummerySum: {
    color: "#17583b",
    height: "27px",
    padding: "6px 8px",
    boxShadow:
      "0 4px 12px 0 rgba(131, 234, 188, 0.5), 0 2px 4px 0 rgba(131, 234, 188, 0.5)",
    marginLeft: "auto",
    whiteSpace: "nowrap",
    borderRadius: "2px",
    backgroundColor: "#83eabc",
  },
  summery: {
    position: "relative",
    marginBottom: "8px",
  },
  summeryContent: {
    padding: "15px 16px 25px",
    display: "flex",
    fontSize: "14px",
    fontWeight: "bold",
  },
  summeryPrice: {
    flex: "0 0 auto",
    color: "black",
    fontSize: "14px",
    marginLeft: "auto",
    paddingLeft: "20px",
  },
  zigzagBottom: {
    top: "6px",
    width: "100%",
    height: "13px",
    zIndex: "-1",
    position: "relative",
    marginBottom: "40px",
    backgroundImage: "url(/static/images/icons/zigzag.svg)",
    backgroundRepeat: "repeat",
  },
  counterEdit: {
    background: "#ffffff",
    boxShadow: "0 -1px 0 0 rgba(0,0,0,.02)",
  },
  counterWrapper: {
    display: "flex",
    padding: "16px",
    minHeight: "100px",
    alignItems: "center",
    borderBottom: "1px solid #f5f5f5",
    justifyContent: "space-between",
  },
  counter: {
    border: " solid 1px #e0e0e0",
    padding: "13px 20px",
    borderRadius: "4px",
  },
  counterButton: {
    width: "24px",
    height: "24px",
    fontSize: "22px",
    lineHeight: "24px",
  },
  submitBtn: {
    padding: "16px",
    border: " 1px solid rgb(255, 224, 51)",
    background: "rgb(255, 224, 51)",
    borderRadius: "8px",
    boxShadow:
      "0 4px 12px 0 rgba(255, 231, 95, 0.3), 0 2px 4px 0 rgba(255, 224, 51, 0.3)",
  },
  btnContent: {
    flex: "0 0 auto",
    padding: "7px 10px",
    fontSize: "14px",
    borderRadius: "3px",
    backgroundColor: "rgba(0, 0, 0, 0.03)",
  },
}));
const min = (
  <FormattedMessage id="restaurant.cart.Minute" defaultMessage="Min" />
);

const MobileCart = () => {
  const classes = useStyles();

  return (
    <div className={classes.fullScreen}>
      <div className={classes.infoRoot}>
        <div
          className={classNames(
            classes.header,
            "flex flex-row flex-no-wrap w-full items-center justify-between bg-white sticky"
          )}
        >
          <IconButton aria-label="close">
            <Link to="/restaurant">
              <Icon className="text-lg text-black">arrow_back</Icon>
            </Link>
          </IconButton>

          <div
            className={classNames(
              classes.logo,
              "text-center text-lg font-bold"
            )}
          >
            Теремок
          </div>
          <IconButton aria-label="close">
            <Link to="/cart">
              <Icon className="text-black">delete_forever</Icon>
            </Link>
          </IconButton>
        </div>
        <div className={classes.content}>
          <div className="w-full z-10">
            <div>
              <div className={classNames(classes.delivery, "mt-2")}>
                <div className={classes.deliveryIcon}></div>
                <div
                  className={classNames(
                    classes.deliveryText,
                    "flex flex-col items-stretch justify-around font-normal"
                  )}
                >
                  <div className="text-sm leading-tight">
                    <FormattedMessage
                      id="mobileCheckout.YandexDelivery"
                      defaultMessage="Delivery of Yandex.Food"
                    />
                  </div>
                  <div className="text-xs leading-tight">
                    <FormattedMessage
                      id="home.catalog.Delivery"
                      defaultMessage="Delivery"
                    />{" "}
                    29–99 ₽.
                    <FormattedMessage
                      id="restaurant.heroHeaderBottom.freeCondition"
                      defaultMessage="Free when ordering from"
                    />
                    1500 ₽
                  </div>
                </div>
                <div className={classNames(classes.deliveryFee, "mt-1")}>
                  209 ₽
                </div>
              </div>
              <div className={classes.delivery}>
                <div className={classes.promoImageWrap}>
                  <img
                    src="/static/images/icons/overlay-percent.png"
                    alt="promo"
                    className={classes.promoImage}
                  />
                </div>
                <div>
                  <div>
                    <FormattedMessage
                      id="restaurant.cart.Discount"
                      defaultMessage="Discount"
                    />{" "}
                    20%
                  </div>
                  <div className={classes.promoSubTitle}>
                    <FormattedMessage
                      id="cart.mobileCart.ForAllDishes"
                      defaultMessage="For all dishes"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={classes.itemsRoot}>
              <div className={classes.items}>
                <div className={classes.itemsQuantity}>1</div>
                <div className={classes.itemsCounter}>×</div>
                <div>
                  <div className={classes.itemsTitle}>Борщ</div>
                </div>
                <div className={classes.itemsPrice}>315 ₽</div>
              </div>
              <div className={classes.promoSummery}>
                <div>
                  <FormattedMessage
                    id="restaurant.cart.Discount"
                    defaultMessage="Discount"
                  />{" "}
                  20%
                </div>
                <div className={classes.promoSummerySum}>– 50 ₽</div>
              </div>
              <div className={classes.summery}>
                <div className={classes.summeryContent}>
                  <div>
                    <FormattedMessage
                      id="restaurant.cart.Total"
                      defaultMessage="Total"
                    />
                  </div>
                  <div className={classes.summeryPrice}>300 ₽</div>
                </div>
                <div className={classes.zigzagBottom}></div>
              </div>
            </div>
          </div>
        </div>
        <div className={classNames(classes.counterEdit, "w-full bg-white")}>
          <div className={classes.counterWrapper}>
            <div>
              <FormattedMessage
                id="cart.mobileCart.Devices"
                defaultMessage="Devices"
              />
            </div>
            <div className={classNames(classes.counter, "my-2")}>
              <span className="flex items-center text-center">
                <div
                  className={classNames(
                    classes.counterButton,
                    "font-bold cursor-pointer"
                  )}
                >
                  -
                </div>
                <div className="my-0 mx-2 text-lg">1</div>
                <div
                  className={classNames(
                    classes.counterButton,
                    "font-bold cursor-pointer"
                  )}
                >
                  +
                </div>
              </span>
            </div>
          </div>
          <div className="flex flex-row justify-between mt-3">
            <button
              className={classNames(
                classes.submitBtn,
                "text-center w-full m-4 text-lg font-bold"
              )}
            >
              <Link to={"/checkout"}>
                <span className="w-full h-full relative flex flex-no-wrap items-center">
                  <div className={classes.btnContent}>25 — 35 {min}</div>
                  <div className="flex mx-auto items-center justify-center">
                    <FormattedMessage
                      id="home.loginConfirmSubmit.Next"
                      defaultMessage="Next"
                    />
                  </div>
                  <div className={classes.btnContent}>50 ₽</div>
                </span>
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileCart;
