import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from "react-intl";

import { connect } from "react-redux";

import Utils from "assert/Utils";
import Restaurant from "./Restaurant";


const useStyles = makeStyles((theme) => ({
	title: {
		margin: "16px 0 24px",
		fontSize: "28px",
		fontWeight: "bold",
	},
	more: {
		color: "#000000",
		background: "rgb(255, 224, 51)",
		fontWeight: "bold",
		textAlign: "center",
		padding: "12px 0px",
		cursor: "pointer",
		borderRadius: 4,
		fontSize: 16,
	},
	restaurant:{
		flex: "1 0 33%",
		transition: "opacity 800ms ease-in, transform 0.1s linear",
		position: "relative",
		maxWidth: "33.3%",
		minWidth: "300px",
		padding: "0px 15px",
		marginBottom: "40px",
		"&:hover": {
		transform: "scale(1.03)",
		},
		[theme.breakpoints.down("sm")]: {
		maxWidth: "100%",
			"&:hover": {
				transform: "none",
			},	  
		},		
	},
}));

const title = (
	<FormattedMessage
		id="home.nextRestaurants.NearYou"
		defaultMessage="Near you"
	/>
);
const moreText = (
	<FormattedMessage
		id="home.nextRestaurants.ShowMore"
		defaultMessage="Show more"
	/>
);

const showCount = 3;

const getFilteredArray = (entities, searchText) => {
	const arr = Object.keys(entities).map((id) => entities[id]);
	if (searchText.length === 0) {
		return arr;
	}
	return Utils.filterArrayByString(arr, searchText);
};

const NextRestaurants = ({ restaurants, searchText }) => {

	const classes = useStyles();

	const [more, setMore] = useState(false);

	const moreClick = () => setMore(true);

	const filteredRestaurant = getFilteredArray(restaurants, searchText);

	const newRestaurants = more
		? filteredRestaurant
		: filteredRestaurant.slice(0, showCount);

	return (
		<div>
			<h2 className={classes.title}>{title}</h2>
			<div className="flex flex-row flex-wrap">
					{newRestaurants.map((item, index) => (
						<Restaurant restaurant={item} key={index} className={classes.restaurant}/>
					))}
			</div>
			{restaurants.length > showCount && (
				<div className={classes.more} onClick={moreClick}>
					{moreText}
				</div>
			)}
		</div>
	);
};

const mapStateToProps = (state) => ({
	restaurants: state.restaurant.restaurants,
	searchText: state.restaurant.searchText,
});

export default connect(mapStateToProps)(NextRestaurants);
