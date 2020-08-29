import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles((theme) => ({
  delivery: {
    flex: " 0 0 auto",
    margin: "0 4px",
    display: "flex",
    padding: "11px 0",
    position: "relative",
    userSelect: "none",
    borderRadius: "12px",
  },
  deliveryByUs: {
    flex: "0 0 auto",
    marginRight: "13px",
  },
  deliveryContent: {
    width: "28px",
    backgroundColor: "#ffe033",
    borderTopLeftRadius: "3px",
    borderBottomLeftRadius: "3px",
  },
  deliveryIcon: {
    width: "24px",
    height: "24px",
    padding: "9px 0",
    zIndex: 2,
    position: "relative",
    boxSizing: "content-box",
    marginLeft: "5px",
    backgroundSize: "100%",
    backgroundImage: "url(/static/images/icons/motor-bike.svg)",
    backgroundRepeat: " no-repeat",
    backgroundPosition: "center",
  },
  deliveryTriangle: {
    top: "16px",
    left: "13px",
    width: "30px",
    height: "30px",
    zIndex: 1,
    position: "absolute",
    transform: "scaleX(0.4) rotate(45deg)",
    backgroundColor: "#ffe033",
    borderTopRightRadius: " 4px",
  },
  deliveryText: {
    flex: " 0 0 auto",
  },
  info: {
    borderRadius: "12px",
    "&:hover": {
      background: "rgba(255, 255, 255, 0.1)",
    },
    "&:focus": {
      background: "rgba(255, 255, 255, 0.1)",
    },
  },
  infoIcon: {
    width: "35px",
    height: "35px",
    marginLeft: "17px",
    backgroundSize: "100%",
    backgroundImage:
      "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNSIgaGVpZ2h0PSIzNSIgdmlld0JveD0iMCAwIDM1IDM1Ij48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxyZWN0IHdpZHRoPSIzMyIgaGVpZ2h0PSIzMyIgeD0iMSIgeT0iMSIgc3Ryb2tlPSIjRkZGIiBzdHJva2Utb3BhY2l0eT0iLjMiIHN0cm9rZS13aWR0aD0iMiIgcng9IjEyIi8+PHRleHQgZmlsbD0iI0ZGRiIgZm9udC1mYW1pbHk9IlByb3hpbWFOb3ZhLUJsYWNrLCBQcm94aW1hIE5vdmEiIGZvbnQtc2l6ZT0iMjAiIGZvbnQtd2VpZ2h0PSI3MDAiPjx0c3BhbiB4PSIxNSIgeT0iMjQiPmk8L3RzcGFuPjwvdGV4dD48L2c+PC9zdmc+)",
    backgroundPosition: "center",
  },
}));

const HeroHeaderBottom = () => {
  const classes = useStyles();

  return (
    <div className="flex flex-wrap items-start justify-between">
      <div className={classes.delivery}>
        <div className={classes.deliveryByUs}>
          <div className={classes.deliveryContent}>
            <div className={classes.deliveryIcon}></div>
            <div className={classes.deliveryTriangle}></div>
          </div>
        </div>
        <div
          className={classNames(
            classes.deliveryText,
            "flex flex-col items-stretch justify-around text-white ml-2"
          )}
        >
          <div className="text-sm">
            <FormattedMessage
              id="mobileCheckout.YandexDelivery"
              defaultMessage="Yandex delivery"
            />
          </div>
          <div className="text-base">
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
      </div>
      <div className="px-4 py-3 text-white">
        <div className="text-sm">
          <FormattedMessage
            id="restaurant.heroHeaderBottom.OrderFrom"
            defaultMessage="Order from"
          />
        </div>
        <div className="text-base">0₽</div>
      </div>
      <div
        className={classNames(
          "m-1 flex cursor-pointer rounded py-2 px-4 text-white",
          classes.info
        )}
      >
        <h3 className="w-32">
          <FormattedMessage
            id="restaurant.heroHeaderBottom.RestaurantInformation"
            defaultMessage="Restaurant Information"
          />
        </h3>
        <div className={classes.infoIcon}></div>
      </div>
    </div>
  );
};

export default HeroHeaderBottom;
