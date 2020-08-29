import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from 'react-redux';
import { getRestaurants } from "store/restaurant";
import { getSetting } from "store/setting";

import Hero from "./Hero";
import Category from "./Category";
import Catalog from "./Catalog";
import RestaurantCarousel from "./restaurant/RestaurantCarousel";
import NextRestaurants from "./restaurant/NextRestaurants";


const useStyles = makeStyles(() => ({
	root: {
		borderRadius: "4px 4px 0 0",
		background:"white",
		border: 'solid 1px #eeeeee',		
	},
	main: {
		padding: "20px 80px",		
	},
}));

const Home = (props) => {

	const classes = useStyles();
	const dispatch = useDispatch();

	React.useEffect(() => {
		dispatch(getRestaurants());
	}, [dispatch]);
	
 	React.useEffect(() => {
		dispatch(getSetting("home"));
	}, [dispatch]);		
	
	return (
		<div className={classes.root}>
		
			<Hero />
			<Category />
			<Catalog />	 
			<RestaurantCarousel />
			<div className={classes.main}>
				<NextRestaurants />
			</div>
			
		</div>
	);
};
export default Home;