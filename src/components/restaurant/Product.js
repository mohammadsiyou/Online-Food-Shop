import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { openDialog } from "store/dialog";

import LocationModal from "../location/LocationModal";
import ProductMenuModal from "../product/product-menu-Modal/ProductMenuModal";

const useStyles = makeStyles((theme) => ({
  productItemBoxWrapper: {
    flex: "1 1 auto",
    width: "100%",
    display: "flex",
    padding: "20px",
    [theme.breakpoints.down("md")]: {
      padding: "20px 2px",
    },
  },
  productItemRoot: {
    flex: "1 1 auto",
    width: "100%",
    cursor: "pointer",
    display: "flex",
    padding: "18px 20px",
    position: "relative",
    borderRadius: "4px",
    flexDirection: "column",
    backgroundColor: "#ffffff",
  },
  productItemTopLine: {
    flex: "1 0 auto",
  },
  imageDefault: {
    height: "210px",
    overflow: "hidden",
    borderRadius: "4px",
    backgroundSize: "240px",
    backgroundImage: "url(/static/images/icons/fallback-pattern.svg)",
    backgroundColor: "#f5f5f5",
    backgroundPosition: "center",
  },
  image: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100%",
    height: "100%",
  },
  weight: {
    color: "#999999",
    lineHeight: "1.39",
    whiteSpace: "nowrap",
  },
  productItemDescription: {
    color: "#b0b0b0",
    width: "100%",
    overflow: "hidden",
    fontSize: "15px",
    marginTop: "8px",
    lineHeight: "1.33",
    overflowWrap: "break-word",
  },
}));

const Product = ({
  product: { name, imagesAdress, description, weight, price },
  openDialog,
  location,
}) => {
  const classes = useStyles();

  const productClick = () => {
    if (location === null)
      openDialog({
        children: <LocationModal />,
        maxWidth: "md",
        fullWidth: true,
        fullScreen: false,
        scroll: "body",
        classes: { paper: "m-0" },
      });
    else
      openDialog({
        children: <ProductMenuModal />,
        maxWidth: "sm",
        fullWidth: true,
        fullScreen: false,
        scroll: "paper",
        classes: { paper: "m-0 md:m-48" },
      });
  };

  return (
    <div className="w-1/2" onClick={productClick}>
      <div className={classes.productItemBoxWrapper}>
        <div className={classes.productItemRoot}>
          <div className="">
            <div className="flex justify-between text-base">
              <div className="">
                <span className="text-black mr-2">{name}</span>
                <span className={classNames(classes.weight, "text-sm")}>
                  {weight}
                </span>
              </div>
              <div>
                <span className="mr-2">{price}</span>
              </div>
            </div>
            <div className={classes.productItemDescription}>{description}</div>
          </div>
          <div className="relative mt-6">
            <div className={classes.imageDefault}>
              <div
                className={classes.image}
                role="img"
                style={{ backgroundImage: `url(${imagesAdress})` }}
              ></div>
              <noscript>
                <img src={imagesAdress} alt={name} />
              </noscript>
            </div>
          </div>
        </div>
      </div>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);
