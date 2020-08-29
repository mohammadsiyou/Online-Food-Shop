import React from "react";
import { Divider, Hidden } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";

import FooterTopLine from "./FooterTopLine/FooterTopLine";
import FooterMenus from "./FooterMenus/FooterMenus";
import FooterBottomLine from "./FooterBottomLine/FooterBottomLine";
import MobileFooterRoot from "./MobileFooter/MobileFooterRoot";


const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#f9f9f9",
    paddingTop: "10px",
  },
}));



const FooterRoot = () => {
	const classes = useStyles();

	return (
		<footer className={classNames(classes.root)} id="Footer">
			<FooterTopLine />
			<Divider light />
			<Hidden smDown>
				<FooterMenus />
			</Hidden>
			<Hidden mdUp>
				<MobileFooterRoot/>
			</Hidden>     
			<Divider light />
			<FooterBottomLine />
		</footer>
	);
};

export default FooterRoot;
