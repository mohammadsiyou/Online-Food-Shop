import React from "react";
import { Icon } from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  restaurantBox: {

  },
  restaurantLink: {
    height: "100%",
    display: "block",
    boxShadow: "0px 4px 40px rgb(230, 230, 230)",
    transition: "transform 0.1s linear",
    borderRadius: "8px",
  },
  imageContainer: {
    width: "100%",
    position: "relative",
    paddingTop: "57.5%",
  },
  imageWrapper: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    zIndex: "0",
    position: "absolute",
    overflow: "hidden",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  imageItem: {
    transition: "transform 0.1s linear",
    backgroundSize: "240px",
    backgroundImage: "url(/static/images/restaurants/fallback-pattern.svg)",
    backgroundColor: "#f5f5f5",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
  },
  restaurantImage: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
  },
  badgewrapper: {
    width: "58px",
    height: "38px",
    display: "flex",
    boxShadow:
      "0 0 12px 0 rgba(131, 234, 188, 0.5), 0 0 4px 0 rgba(131, 234, 188, 0.5)",
    textAlign: "center",
    lineHeight: "38px",
    alignItems: "center",
    borderRadius: "7px 0 8px 0",
    justifyContent: "center",
    backgroundColor: "#83eabc",
    top: "0",
    left: "0",
    position: "absolute",
  },
  badge: {
    height: "24px",
    display: "inline-block",
    borderStyle: "none",
  },
  imageLabel: {
    top: "100%",
    right: "16px",
    padding: "10px 17px",
    position: "absolute",
    fontSize: "16px",
    marginTop: "-24px",
    textAlign: "center",
    background: "#fff",
    borderRadius: "23px 23px 0 0",
  },
  labelTitle: {
    position: "relative",
    fontWeight: "bold",
  },
  labelAnnotation: {
    color: "#b0b0b0",
    fontSize: "14px",
    lineHeight: "10px",
  },
  restaurantContent: {
    padding: "16px 20px 20px",
  },
  restaurantName: {
    position: "relative",
    overflow: "hidden",
    fontSize: "20px",
    lineHeight: "1.2",
    fontWeight: "bold",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  },
  restaurantDetail: {
    marginTop: "12px",
    marginBottom: "12px",
    display: "flex",
    flexWrap: "nowrap",
    fontSize: "14px",
    alignItems: "center",
  },
  restaurantRate: {
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
    minWidth: "40px",
    whiteSpace: "nowrap",
    lineHeight: "20px",
    textOverflow: "ellipsis",
  },
  restaurantPriceRoot: {
    minWidth: "50px",
    lineHeight: "22px",
    paddingLeft: "22px",
    backgroundSize: "20px 20px",
    backgroundImage: "url(/static/images/restaurants/wallet.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    backgroundPositionY: "1px",
    marginLeft: "16px",
  },
  restaurantPrice: {
    color: "#b0b0b0",
  },
}));

const Restaurant = ({
  restaurant: { name, imagesAdress, labelTitle, labelAnnotation, rate },
  className
}) => {
  
  const classes = useStyles();
  const match = useRouteMatch({path: '/:language/:city'}); 
  
  return (
    <div className={classNames(classes.restaurantBox, className)}>
      <Link to={`${match.url}/restaurant`} className={classes.restaurantLink}>
        <div className={classes.imageContainer}>
          <div className={classes.imageWrapper}>
            <div className={classes.imageItem}>
              <div
                className={classes.restaurantImage}
                style={{ backgroundImage: `url(${imagesAdress})` }}
              ></div>
            </div>
            <noscript>
              <img src={imagesAdress} alt={name} />
            </noscript>
          </div>
          <div className={classes.badgewrapper}>
            <img
              className={classes.badge}
              src="/static/images/restaurants/5bb13c55ddf94.png"
              alt="badge"
            />
          </div>
          <div className={classes.imageLabel}>
            <div className={classes.labelTitle}>{labelTitle}</div>
            <div className={classes.labelAnnotation}>{labelAnnotation}</div>
          </div>
        </div>
        <div className={classes.restaurantContent}>
          <h3 className={classes.restaurantName} title={name}>
            {name}
          </h3>
          <div className={classes.restaurantDetail}>
            {rate && (
              <div className={classes.restaurantRate}>
                <Icon className="mr-2">star_border</Icon>
                <span>{rate}</span>
              </div>
            )}
            <div className={classes.restaurantPriceRoot}>
              <span className="text-black">₽₽</span>
              <span className={classes.restaurantPrice}>₽</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Restaurant;
