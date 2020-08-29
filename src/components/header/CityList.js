import React from "react";
import { List, ListItem, ListItemText } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { NavLink, useRouteMatch, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { closePopover } from "store/popover";

const useStyles = makeStyles((theme) => ({
	listItem: {
		color: "inherit!important",
		textDecoration: "none!important",
		height: 40,
		width: "100%",
		paddingLeft: 24,
		paddingRight: 12,
	},
}));

const CityList = ({ cities, closePopover }) => {
	const classes = useStyles();
	const match = useRouteMatch({path: '/:language/:city?'}); 
	const {pathname} = useLocation();

	return (
		<List>
			{cities.map((item, index) => (
				<ListItem
					button
					component={NavLink}
					to={pathname.replace(match.url, `/${match.params.language}/${item.translate[match.params.language]}`)}
					className={classes.listItem}
					key={index}
					onClick={closePopover}
				>
					<ListItemText
						className="truncate pr-0"
						primary={item.translate[match.params.language]}
						disableTypography={true}
					/>
				</ListItem>
			))}
		</List>
	);
};
const mapStateToProps = (state) => ({
	cities: state.city.cities,
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			closePopover,
		},
		dispatch
	);
}
export default connect(mapStateToProps, mapDispatchToProps)(CityList);
