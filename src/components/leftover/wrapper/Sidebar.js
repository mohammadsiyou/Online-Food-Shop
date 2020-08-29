import React from "react";
import { List, ListItem } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from "react-intl";
import { NavLink, useRouteMatch } from "react-router-dom";
import { useSelector } from 'react-redux';
import classNames from 'classnames';

const useStyles = makeStyles((theme) => ({
	root: {
		position: "sticky",
		top: "99px",
		height: "100%",
		marginRight: "8px",
	},
	wrapper: {
		width: "350px",
		overflow: "hidden",
		//"marginRight": "10px",
		borderRadius: "4px",
		backgroundColor: "#f2f2f2",
	},
	sidebarTitle: {
		fontSize: "20px",
		fontWeight: "bold",
		lineHeight: "3.4",
		paddingLeft: "20px",
		borderBottomWidth: "1px",
		borderBottomStyle: "solid",
		borderBottomColor: "#e3e3e3",
	},
	list: {
		paddingTop: "0px",
		paddingBottom: "0px",
	},
	listItem: {
		cursor: "pointer",
		minHeight: "60px",
		paddingLeft: "20px",
		paddingTop: "0px",
		paddingBottom: "0px",
		"&.active": {
			backgroundColor: "#e3e3e3",
			color: theme.palette.secondary.contrastText + "!important",
			pointerEvents: "none",
			"& .list-item-icon": {
				color: "inherit",
			},
		},
		"&:hover": {
			backgroundColor: "#e3e3e3",
		},
	},
	listItemContent: {
		borderBottomWidth: "1px",
		borderBottomStyle: "solid",
		borderBottomColor: "#e3e3e3",
		display: "flex",
		alignItems: "flex-start",
		paddingTop: "15px",
		paddingRight: "30px",
		paddingBottom: "15px",
		justifyContent: "flex-start",
		width: "100%",
	},
	listItemName: {
		fontSize: "17px",
		textAlign: "left",
		paddingTop: "5.5px",
		lineHeight: "1.1875",
		paddingBottom: "5.5px",
		color: "black",
	},
	listItemCount: {
		color: "#b0b0b0",
		fontSize: "16px",
		paddingTop: "5.5px",
		marginLeft: "12px",
		lineHeight: "1.1875",
		paddingBottom: "5.5px",
	},
}));

const Sidebar = () => {
	const classes = useStyles();
	const match = useRouteMatch({path: '/:language/:city/leftover/:pageNumber?/:category?'}); 
	const categorise = useSelector(state => state.leftover.leftOverCategories);
	const {language, city, category } = match.params;
	
	return (
		<div className={classes.root}>
			<div className={classes.wrapper}>
				<div className={classes.sidebarTitle}>
					<FormattedMessage
						id="leftOver.sidebar.Categories"
						defaultMessage="Categories"
					/>
				</div>
				<List className={classes.list}>
					{categorise.map(({ id, title:name, count, slug }, index) => (
						<ListItem
							className={classNames(classes.listItem, slug === category ? 'active' : '')}
							button
							component={NavLink}
							to={`/${language}/${city}/leftover/1/${slug}`}
							exact={true}
							activeClassName="active"
							key={index}
						>
							<div className={classes.listItemContent}>
								<div className={classes.listItemName}>{name}</div>
								<div className={classes.listItemCount}>{count}</div>
							</div>
						</ListItem>
					))}
				</List>
			</div>
		</div>
	);
};

export default Sidebar;
