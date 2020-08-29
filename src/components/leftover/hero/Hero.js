import React from "react";
import { Button, Icon } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { injectIntl } from "react-intl";

import { Link, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {locationChange} from 'store/location';

import GoogleAutocomplete from "components/location/GoogleAutocomplete";
import SearchInput from "./SearchInput";
import AdvanceItems from "./AdvanceItems";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 5,
    position: "relative",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    "& .searchButton": {
      minWidth: "220px",
      background: "yellow",
      height: "100%",
      boxShadow: "none",
      color: "black",
      fontWeight: "bold",
      "&:hover": {
        background: "yellow",
        boxShadow: "none",
      },
    },
  },
  imageRoot: {
    backgroundSize: 240,
    backgroundImage: "url(/static/images/header/fallback-pattern.svg)",
    backgroundColor: "#f5f5f5",
    backgroundPosition: "center",
  },
  imageContainer: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: "absolute",
    transition: "opacity 200ms",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    height: "100%",
    width: "100%",
  },
  imageContent: {
    zIndex: 1,
    position: "relative",
  },
  textContent: {
    color: "white",
    zIndex: 1,
    position: "relative",
    fontWeight: "bold",
  },
  titleText: {
    margin: 0,
    //fontSize: 50,
    maxWidth: 1000,
    lineHeight: 1.2,
    fontWeight: 400,
    paddingRight: "10%",
  },
  addressBlock: {
    color: "black",
    display: "flex",
    position: "relative",
    maxWidth: 700,
    marginTop: 30,
    fontWeight: "lighter",
  },
  searchInput: {
    marginLeft: 8,
    flex: 1,
  },
  locationIcon: {
    opacity: "0.75",
    margin: "0px 8px",
    cursor: "pointer",
    "&:hover": {
      opacity: "1",
    },
  },
}));

const image = {
  address:
    "/static/images/restaurants/c741a77ebc1a29c504fb950692c6345c-1100x825.jpeg",
  name: "Hero Image",
};

const links = [
  {
    name: (
      <FormattedMessage id="home.hero.YandexEda" defaultMessage="Yandex.Food" />
    ),
    address: "",
    id: "1",
  },
  {
    name: <FormattedMessage id="home.hero.Moscow" defaultMessage="ُMoscow" />,
    address: "mosco",
    id: "2",
  },
];

const imageText = [
  <FormattedMessage
    id="home.hero.FirstImage"
    defaultMessage="Fast food delivery"
  />,
  <FormattedMessage id="home.hero.SecondImage" defaultMessage="ُin Moscow" />,
];

const Hero = ({ className, mapClick, locationChange, location, intl}) => {
  const classes = useStyles();
  const match = useRouteMatch({path: '/:language/:city'});
  const address = location ? location.description : "";
  const search = {
    button: (
      <FormattedMessage
        id="home.hero.ShowRestaurants"
        defaultMessage="Show Restaurants"
      />
    ),
    input: intl.formatMessage({
      id: "home.hero.ShippingAddress",
      defaultMessage: "Enter shipping address ...",
    }),
  };

  return (
    <div className={classNames(classes.root, className)}>
      <div className={classes.imageRoot}>
        <div
          className={classes.imageContainer}
          style={{ backgroundImage: `url(${image.address})` }}
          role="img"
          aria-label={image.name}
        ></div>
        <noscript>
          <img src={image.address} alt={image.name} />
        </noscript>
      </div>
      <div className={classes.imageContent}>
        <div className="mb-8">
          {links.map(({ name, address }, index) => (
            <Link
              key={index}
              to={`${match.url}/${address}`}
              className="mr-4 text-white opacity-75"
            >
              {name}
            </Link>
          ))}
        </div>
        <div className={classes.textContent}>
          <h1 className={classes.titleText}>
            {imageText.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </h1>
          <div className={classes.addressBlock}>
            <div className="flex justify-between w-full h-12 items-center rounded bg-white">
              <Icon
                className={classes.locationIcon}
                onClick={mapClick}
              >
                my_location
              </Icon>
              <GoogleAutocomplete
                placeholder={search.input}
                locationChange={locationChange}
                location={address}
              />
              <Button variant="contained" className="searchButton">
                {search.button}
              </Button>
            </div>
          </div>
          <SearchInput className="mt-3 w-2/3 searchInput" />
          <AdvanceItems className="advanceItems" />
        </div>
      </div>
    </div>
  );

};

function mapStateToProps(state) {
  return { location: state.location.current };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			locationChange,
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Hero));
