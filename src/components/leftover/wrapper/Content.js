import React, { useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getLeftOvers } from "store/leftover";

import Card from "./Card";

const useStyles = makeStyles(() => ({
	root: {
		display: "flex",
		flexDirection: "column",
		flex: "1 1",
		"& .cartWrapper": {
			background: "white",
			border: "1px solid #f2f2f2",
			padding: "8px",
			marginTop: "8px",
			"&:first-child": {
				marginTop: "0px",
			},
		},
	},
}));

const Content = ({ className }) => {
	
	const classes = useStyles();
	const dispatch = useDispatch();
	const match = useRouteMatch({path: '/:language/:city/leftover/:pageNumber?/:category?'});
	const leftOvers = useSelector(state => state.leftover.leftOvers, shallowEqual);
	const filters = useSelector(state => state.leftover.leftOversFilters); 
	const searchtxt = useSelector(state => state.leftover.searchText);
	const priceRange = useSelector(state => state.setting.priceRange);
	const price = React.useMemo( () => filters.price !== null ? filters.price : [priceRange["0"], priceRange["1"]], [filters.price, priceRange]);
	const page = parseInt(match.params.pageNumber, 10) || 1;
	const skip = page -1;
	const category =  match.params.category || '';

	const allFilters = React.useMemo(() => ({...filters, price, skip, searchtxt, category}), 
		[filters, searchtxt, category, price, skip]);
	
	useEffect(() => {
		if(allFilters.price[0] !== undefined)
			dispatch(getLeftOvers(match.params.language, match.params.city, allFilters));
	}, [dispatch, allFilters, match.params.language, match.params.city]);

	return (
		<div className={classNames(classes.root, className)}>
			{leftOvers.map((item, index) => (
				<Card item={item} key={index} className="cartWrapper" currency={{}}/>
			))}
		</div>
	);
};

export default Content;
