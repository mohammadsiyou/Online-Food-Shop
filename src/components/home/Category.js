import React, { useEffect } from "react";
import {
	Icon,
	List,
	ListItem,
	ListItemText,
} from "@material-ui/core";
import { NavLink, useHistory, useRouteMatch } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import debounce from 'lodash/debounce';
import classNames from 'classnames';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from "react-redux";
import { getRestaurantCategories } from "store/restaurant";
import { openPopover, closePopover } from "store/popover";
import { bindActionCreators } from "redux";

import Sort from "./Sort";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		alignItems: "center",
		borderBottom: "1px solid #f5f5f5",
		justifyContent: "space-between",
	},
	nav: {
		margin: "21px 80px",
		display: "flex",
		flexWrap: "nowrap",
		flex: "1 1 100%",
		overflow: 'hidden',
		height:'auto',
	},
	linkWrapper:{
		flex: '0 0 auto',
		
	},
	LinkButton: {
		height: 46,
		marginRight: 4,
		padding: "0 12px",
		display: "block",
		lineHeight: 3,
		borderRadius: 22,
		color: "black",
		"&:hover": {
			background: "#f5f5f5",
		},
	},
	active: {
		background: "rgb(255, 224, 51)",
	},
	button: {
		borderRadius: 22,
		padding: 8,
		outline: "none !important",
		display:"flex",
		flex:'0 0 auto',
		alignItems:"center",
		cursor: "pointer",
	},
	listItem: {
		color: "inherit!important",
		textDecoration: "none!important",
		height: 40,
		width: "calc(100% - 16px)",
		borderRadius: "0 20px 20px 0",
		paddingLeft: 24,
		paddingRight: 12,
	},
	sortButton: {
		margin: '0px 80px',
		color: "#000000",
		padding: "12px 16px",
		minWidth: "150px",
		fontSize: "15px",
		lineHeight: "1.2",
		borderRadius: "28px",
		backgroundColor: "#f5f5f5",
		transitionDuration: "200ms",
		transitionProperty: "background-color, color",
		cursor: "pointer",
		display: "flex",
		alignItems: "center",
	},
	sortRoot: {
		minHeight: 400,
		width: 300,
	},
}));

const more = (
	<FormattedMessage id="home.category.More" defaultMessage="More" />
);
const sort = (
	<FormattedMessage id="home.category.Sort" defaultMessage="Sorting" />
);

const Category = ({
	getRestaurantCategories,
	categorise,
	openPopover,
	closePopover,
}) => {
	const classes = useStyles();
	const match = useRouteMatch({path: '/:language/:city'}); 
	
	useEffect(() => {
		getRestaurantCategories();
	}, [getRestaurantCategories]);

	const [count, setCount] = React.useState(0);
	const navDom = React.useRef(null);
	
	const {location}= useHistory();
			
	const measuredNav = React.useCallback(node => {
		if(!node)
			return undefined;
				
		const measuredNavItems = (nav) => { 
			//if(nav.clientWidth < nav.scrollWidth){ //check overflowtem
				const navItems = nav.children;
				let maxWidth = nav.lastChild.clientWidth + 40;//last item === more Button + padding
				let counter = 0;
				for(let i =0; i < navDom.current.children.length - 1; i++){ //dont consider last child becuase that is considered at intialing maxWidth.				
					if(!navItems[i])
						continue;
					maxWidth += navItems[i].clientWidth;
					if(maxWidth < nav.clientWidth)
						counter++;
					else //rest items...
						break;
							
				}
				if(counter)
					setCount(counter);
			//}			
		};
				
		const resizeObserver = new ResizeObserver(() => {
			const measuredDebounce = debounce(() => measuredNavItems(node), 250);
			measuredDebounce();
		});	
		
		const timeId = setTimeout(() => {
			const clone = node.cloneNode(true);
			if(!navDom.current)
				navDom.current = clone;
			resizeObserver.observe(node);						
		});
		
		return () => {
			clearTimeout(timeId);
			resizeObserver.disconnect();
		};
	}, []);

	const showCount = count || categorise.length;
	
	let moreExact = undefined;
	
	let path = "";
	
	try{
		path = location.pathname.split('/')[1];
	}
	catch(err){}

	if(path)
		moreExact = categorise.slice(showCount).find(item => item.name === path);

	const RestCategories = () => (
		<List>
			{categorise.slice(showCount).map(({ name, id }, index) => (
				<ListItem
					button
					component={NavLink}
					to={`${match.url}/${name}`}
					className={classes.listItem}
					key={index}
					onClick={closePopover}
				>
					<ListItemText
						className="truncate pr-0"
						primary={name}
						disableTypography={true}
					/>
				</ListItem>
			))}
		</List>
	);
	const categoryClick = (event) => {
		openPopover(event.currentTarget, {
			children: <RestCategories />,
			classes: { paper: "w-64 h-auto" },
		});
	};
	const sortClick = (event) => {
		openPopover(event.currentTarget, {
			children: <Sort />,
			classes: { paper: "w-64 h-auto" },
		});
	};
	
	
	
	return (
		<div className={classes.root}>
			<nav className={classes.nav} id="nav" ref={measuredNav}>
				{categorise.slice(0, showCount).map(({ name, id }, index) => (
					<div className={classes.linkWrapper} key={index}>
						<NavLink
							exact
							className={classes.LinkButton}
							to={`${match.url}/${name}`}
							activeClassName={classes.active}
						>
							{name}
						</NavLink>
					</div>
				))}
				{
					count !== categorise.length &&
						<div
							className={classNames(classes.button, moreExact ? classes.active : "")}
							onClick={categoryClick}
						>
							<span>{moreExact ? path : more}</span>
							<Icon>keyboard_arrow_down</Icon>
						</div>					
				}
			</nav>
			<div className={classes.sortButton} onClick={sortClick}>
				<Icon className="mr-2">sort</Icon>
				<span>{sort}</span>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	categorise: state.restaurant.restaurantCategorise,
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			getRestaurantCategories,
			openPopover,
			closePopover,
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);
