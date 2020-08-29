import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";

import HeroHeaderTop from "./HeroHeaderTop";
import HeroHeaderBottom from "./HeroHeaderBottom";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "400px",
    overflow: "hidden",
    flex: "1 0 100%",
    backgroundSize: "240px",
    backgroundColor: "#f5f5f5",
    backgroundPosition: "center",
    backgroundImage: "url(/static/images/products/fallback-pattern.svg)",
  },
  bgImage: {
    backgroundImage: "url(/static/images/restaurants/hero.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  backdrop: {
    backgroundImage:
      "linear-gradient(to bottom, rgba(61, 26, 22, 0), rgba(61, 26, 22, 0.6))",
  },
  headerDivider: {
    height: "1px",
    opacity: " 0.2",
    marginTop: "20px",
    marginBottom: " 8px",
    backgroundColor: "#ffffff",
  },
}));

const HeroHeader = () => {
  const classes = useStyles();

  return (
    <div className={classNames(classes.root)} id="RestaurantHero">
      <div className={classNames(classes.bgImage, "w-full h-full")}>
        <div className={classNames(classes.backdrop, "h-full")}>
          <div className="relative mx-32 h-full">
            <div className="absolute bottom-0 py-10 w-full">
              <HeroHeaderTop />
              <div className={classes.headerDivider}></div>
               <HeroHeaderBottom />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroHeader;
