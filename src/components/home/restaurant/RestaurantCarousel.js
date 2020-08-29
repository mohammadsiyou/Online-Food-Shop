import React, { useEffect } from "react";
import { IconButton, Icon } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Restaurant from "./Restaurant";

const useStyles = makeStyles((theme) => ({
	"@global":{
		".show-item":{
			pointerEvents:"auto !important",
			opacity:"1 !important",
		},
	},
	root: {
		borderBottom: "8px solid #fafafa",
		padding: "20px 80px",
	},
	listWrapper: {	
		margin:'-80px -80px -35px',
		padding:'80px 80px 35px',
		overflow:'hidden',
		"scrollBehavior": "smooth",
	},	
	carouselList:{
		marginRight:"-40px",
	},
	carouselWrapper: {
		"display": "flex",
		"maxWidth": "100%",
		"flexWrap": "nowrap",
		"transition": "all 800ms",
		"whiteSpace": "nowrap",		
	},	
	title: {
		margin: "16px 0 24px",
		fontSize: "28px",
		fontWeight: "bold",
	},
	leftArrow: {
		position: "absolute",
		top: "calc(50% - 23px)",
		left: -75,
		zIndex: 1,
		"transition": "opacity 800ms ease-in, transform 0.1s linear",
		pointerEvents:"none",
		opacity:0,		
	},
	rightArrow: {
		position: "absolute",
		top: "calc(50% - 23px)",
		right: -75,
		zIndex: 1,
		pointerEvents:"none",
		opacity:0,			
		"transition": "opacity 800ms ease-in, transform 0.1s linear",		
	},
	sliderWrapper: {
		position: "relative",
	},
	itemWrapper:{
		"flex": "1 0 auto",
		"paddingRight": "40px",
		"width": "calc(100% / 3)",		
	},
	restaurant:{
		"transition": "opacity 800ms ease-in, transform 0.1s linear",
		opacity:0,
		pointerEvents:"none",		
	},
	arrow:{
		"background": "rgb(252, 224, 0)",
		"color": "black",		
		"&:hover":{
			"background": "rgb(241, 204, 48)",		
		},
	},
}));

const title = (
	<FormattedMessage
		id="home.restaurantCarousel.NewItems"
		defaultMessage="New items of the week"
	/>
);

const RestaurantCarousel = ({ restaurants }) => {

	const classes = useStyles();
	const theme = useTheme();
	const multi = 3;
	const carouselRef = React.useRef(null);
	const index = React.useRef(-1);
	const perviousButton = React.useRef(null);
	const nextButton = React.useRef(null);
	
	const calCarouselItems = React.useCallback((next=true) => {		
		if(next)
			index.current++;
		else
			index.current--;

		const node = carouselRef.current;
		let itemIndex = index.current * multi;//3
		
		if(index.current === 0){
			perviousButton.current.style.opacity = 0;
			perviousButton.current.style["pointer-events"] = "none";
		}
		else{
			perviousButton.current.style.opacity = 1;
			perviousButton.current.style["pointer-events"] = "auto";
		}

		if(node.children.length <= (index.current + 1) * multi){
			nextButton.current.style.opacity = 0;
			nextButton.current.style["pointer-events"] = "none";			
		}
		else{
			nextButton.current.style.opacity = 1;
			nextButton.current.style["pointer-events"] = "auto";
		}
		
		node.style.transform=`translateX(${-1 * index.current * 100 * (theme.direction === "rtl" ? -1 : 1)}%)`;
		
		for(let i=0; i< node.children.length; i++){
			if(i >= itemIndex && i < itemIndex+3){
				node.children[i].firstChild.style.opacity = 1;
				node.children[i].firstChild.style["pointer-events"] = "auto";
			}
			else{
				node.children[i].firstChild.style.opacity = 0;
				node.children[i].firstChild.style["pointer-events"] = "none";
			}
		}		
	}, [theme.direction]);
	
	useEffect(() => {
		if(!carouselRef.current)
			return undefined;
		index.current = -1;
		const timeId = setTimeout(() => {
			calCarouselItems();
		});
		
		return () => {
			clearTimeout(timeId);
		};
		
	}, [calCarouselItems]);
	
	const next = () => {
		calCarouselItems();
	};
	const before = () => {
		calCarouselItems(false);
	};

	return (
		<div className={classes.root}>
			<h2 className={classes.title}>{title}</h2>
			<div className={classes.sliderWrapper}>
				<div className={classes.leftArrow} ref={perviousButton}>
					<IconButton onClick={before} className={classes.arrow}>
						<Icon fontSize="large">{theme.direction === "rtl" ? "keyboard_arrow_right" : "keyboard_arrow_left"}</Icon>
					</IconButton>
				</div>
				<div className={classes.rightArrow} ref={nextButton}>
					<IconButton onClick={next} className={classes.arrow}>
						<Icon fontSize="large">{theme.direction === "rtl" ? "keyboard_arrow_left" : "keyboard_arrow_right"}</Icon>
					</IconButton>
				</div>
				<div
					className={classes.listWrapper}
					id="carouselId"
				>
					<div className={classes.carouselList}>
						<div className={classes.carouselWrapper} ref={carouselRef}>
							{restaurants.map((item, index) => (
								<div className={classes.itemWrapper} key={index}><Restaurant restaurant={item} className={classes.restaurant}/></div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	restaurants: state.restaurant.restaurants,
});

export default connect(mapStateToProps)(RestaurantCarousel);
