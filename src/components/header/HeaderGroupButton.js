import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { useRouteMatch, useHistory  } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { getCities, cityChange } from "store/city";
import { openPopover } from "store/popover";

import HeaderAuthentication from "./HeaderAuthentication";
import HeaderAddressBtn from "./HeaderAddressBtn";
import HeaderButton from "./HeaderButton";
import CityList from "./CityList";

const useStyles = makeStyles((theme) => ({
	root: {
		lineHeight: "25px",
		display:"flex",
	},
	listItem: {
		color: "inherit!important",
		textDecoration: "none!important",
		height: 40,
		width: "100%",
		paddingLeft: 24,
		paddingRight: 12,
	},
}));

const HeaderGroupButton = ({
	getCities,
	openPopover,
	cityChange,
	cities
}) => {
	const classes = useStyles();
	const match = useRouteMatch({path: '/:language/:city?'}); 
	const history = useHistory();
	
	useEffect(() => {
		getCities(match.params.language);
	}, [getCities, match.params.language]);

	useEffect(() => { 
		try{
			if(match){
				const {city = 'all-city'} = match.params;
				if(city === "all-city")
					return undefined;
				else if(cities.length){
					const findCity = cities.find(item => item.translate[match.params.language] === city); 
					if(!findCity)
						history.push(`/${match.params.language}/all-city`);			
				}
			}
		}
		catch(err){ 
			console.log("City:Error")
		}
	}, [cities, match, history]);	
		
	const cityClick = (event) => {
		openPopover(event.currentTarget, {
			children: <CityList />,
			classes: { paper: "w-64 h-auto" },
		});
	};
	
	let cityName = "";
	if(match !==null && match.params.city)
		cityName = match.params.city;
	else if(cities.length !==0)
		cityName = cities[0].title;
	
	return (
		<Box className={classes.root}>
			<HeaderAddressBtn />
			<HeaderButton textButton={cityName} onClick={cityClick} />
			<HeaderAuthentication />
		</Box>
	);
};
const mapStateToProps = (state) => ({
	cities: state.city.cities,
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			getCities,
			openPopover,
			cityChange,
		},
		dispatch
	);
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderGroupButton);
