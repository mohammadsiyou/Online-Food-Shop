import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { getRestaurantProductCategories } from "store/restaurant";
import { getSetting } from "store/setting";

import CartWrapper from "components/cart/CartWrapper";
import Hero from "./heroHeader/HeroHeader";
import Category from "./RestaurantCategory";
import RestaurantContent from "./RestaurantContent";

const useStyles = makeStyles((theme) => ({
	contentWrapper: {
		display: "flex",
		flexWrap: "wrap",
		alignContent: "flex-start",
	maxWidth:'calc(100% - 265px)',
	},
	sidebarRoot: {},
	contentInner: {
	 
		flexGrow: "1",
		flexBasis: "100%",
		flexShrink: "0",
	},
}));

const DesktopRestaurant = ({ getRestaurantData, getSetting }) => {
	const classes = useStyles();

	useEffect(() => {
		getRestaurantData();
	}, [getRestaurantData]);
	
 	React.useEffect(() => {
		getSetting("restaurant");
	}, [getSetting]);	

	return (
		<div className="flex">
			<div className={classes.contentWrapper}>
				<Hero />
				<div className="w-full">
					<Category className="category" />
					<RestaurantContent className="categoryContent" />
				</div>
			</div>
			<div className={classes.sidebarRoot}>
				<CartWrapper />
			</div>
		</div>
	);
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			getRestaurantData: getRestaurantProductCategories,
			getSetting,
		},
		dispatch
	);
}

export default connect(null, mapDispatchToProps)(DesktopRestaurant);
