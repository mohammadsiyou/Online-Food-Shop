import React from "react";
import { Link, useRouteMatch  } from "react-router-dom";

const logo = {
  src: "/static/images/header/logo.svg",
  alt: "logo",
};

const Logo = () => {
	const match = useRouteMatch({path: '/:language/:city?'}); 
  return (
    <Link to={match.url}>
      <img src={logo.src} alt={logo.alt} className="w-30 sm:w-40" />
    </Link>
  );
};

export default Logo;
