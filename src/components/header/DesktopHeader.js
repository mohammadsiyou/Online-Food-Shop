import React from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from "react-intl";
import classNames from 'classnames';
import { Link, useRouteMatch } from 'react-router-dom';

import HeaderLogo from "./HeaderLogo";
import HeaderGroupButton from "./HeaderGroupButton";

const useStyles = makeStyles({
	wrapper:{
		maxWidth:1400,
	},
});
const links = [
  {
    name: (
      <FormattedMessage id="header.Restaurants" defaultMessage="Restaurants" />
    ),
    address: "restaurant",
    id: 1,
  },
  {
    name: <FormattedMessage id="header.Couriers" defaultMessage="Leftovers" />,
    address: "leftover",
    id: 2,
  },
  {
    name: <FormattedMessage id="header.Companies" defaultMessage="Profile" />,
    address: "profile",
    id: 3,
  },
];

const DesktopHeader = () => {
	const classes = useStyles();
	const match = useRouteMatch({path:'/:language/:city?'});
	const {language, city = "all-city"} = match.params;
  return (
    <div className={classNames(classes.wrapper, "w-full text-base my-4 mx-auto")}>
      <div className=" flex flex-row justify-between">
        <Box className="block mx-0">
          <HeaderLogo />
        </Box>
        <Box className="leading-loose">
          {links.map(({address, name}, index) => (
            <Link
              key={index}
              to={`/${language}/${city}/${address}`}
              className="mx-5"
            >
              {name}
            </Link>
          ))}
        </Box>
        <HeaderGroupButton />
      </div>
    </div>
  );
};

export default DesktopHeader;
