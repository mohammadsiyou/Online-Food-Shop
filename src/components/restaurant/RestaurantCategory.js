import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
	Button,
	List,
	ListItem,
	ListItemText,
	Icon,
} from "@material-ui/core";
import classNames from "classnames";
import { injectIntl } from "react-intl";
import debounce from 'lodash/debounce';

import ScrollSpy from "assert/ScrollSpy";
import { openPopover, closePopover } from "store/popover";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

const useStyles = makeStyles((theme) => ({
	navWrapper: {
		height: "70px",
		position: "sticky",
		top: "99px",
		zIndex: "3",
	},
	navigation: {
		border: "solid #eeeeee",
		borderTop: "none",
		position: "relative",
		boxShadow: "0 1px 0 0 rgba(0,0,0,.05)",
		lineHeight: "70px",
		borderWidth: "0 1px",
		backgroundColor: "#ffffff",
		display: "flex",
		flexWrap: "nowrap",
		padding: "0px 24px",
		"list-style-type": "none",
		[theme.breakpoints.down("md")]: {
			padding: "0px 12px",
		},
		overflowX:"hidden",
		"& > li > a.active": {
			"& > div": {
				boxShadow: "inset 0 -4px 0 #ffe033",
			},
		},
	},
	LinkButton: {
		height: "70px",
		cursor: "pointer",
		display: "inline-block",
		padding: "0 16px",
		lineHeight: "70px",
	},
	activeCategory: {
		boxShadow: "inset 0 -4px 0 #ffe033",
	},
	button: {
		borderRadius: 0,
		padding: 8,
		outline: "none !important",
	},
	listItem: {
		color: "inherit!important",
		textDecoration: "none!important",
		height: 40,
		width: "calc(100% - 16px)",
		borderRadius: "0 20px 20px 0",
		paddingLeft: 24,
		paddingRight: 12,
		display:"flex",
	},
	categoryItem:{
		"whiteSpace": "nowrap",
		flex: '0 0 auto',
		
	},
}));

const RestaurantCategory = (props) => {
	const { className, categorise, openPopover, closePopover, intl } = props;
	const more = intl.formatMessage({id: "home.category.More", defaultMessage: "More"})	
	const classes = useStyles();
	const [count, setCount] = React.useState(0);
	const navDom = React.useRef(null);

	const measuredNav = React.useCallback(node => {
		if(!node)
			return undefined;
				
		const measuredNavItems = (nav) => { 
			const navItems = nav.children;
			let maxWidth = nav.lastChild.clientWidth + 50;
			let counter = 0;
			for(let i =0; i < navDom.current.children.length - 1; i++){ //dont consider last child becuase that is considered at intialing maxWidth.				
				if(!navItems[i])
					continue;
				maxWidth += navItems[i].clientWidth;
				if(maxWidth < nav.clientWidth)
					counter++;
				else 
					break;
			}
			if(counter)
				setCount(counter);		
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
	
	React.useEffect(() => { 
	
		const scrollWrapper = document.getElementById("ScrollWrapper");
		const options = { sectionClass: '.categoryContent > section', offset: 160 };
		let onScroll;
		
		const activeChange = (activeItem) => {	
			if(!activeItem)
				return;
					
			let index = -1;
			for(let i=0; i < navDom.current.children.length;i++) 
				if(navDom.current.children[i].textContent === activeItem.text){
					index = i; //get index of current item
					break;
				}
			const category = document.getElementById("desktop-category");	
			if(index >= count && index > 0){	//if item is in dropdown menu not in horizental menu
				category.lastChild.firstChild.firstChild.textContent = activeItem.text;
				for(let i =0;i < category.children.length - 1;i++)	//remove active className from other horizental items				
					category.children[i].firstChild.className = category.children[i].firstChild.className.replace(/\bactive\b/g, "");
				if(category.lastChild.localName === "button")
					category.lastChild.style["box-shadow"] = "inset 0 -4px 0 #ffe033";//set border whene current item is in dropdown menu									
				else
					category.lastChild.firstChild.className = category.lastChild.firstChild.className.replace(/\bactive\b/g, "") + " active";
			}
			else{
				if(category.lastChild.localName === "button"){
					category.lastChild.firstChild.firstChild.textContent = more;
					category.lastChild.style["box-shadow"] = "";					
				}
				else
					category.lastChild.firstChild.className = category.lastChild.firstChild.className.replace(/\bactive\b/g, "");
			}
		};
			
		const timeId = setTimeout(() => { 
			const instance = new ScrollSpy(scrollWrapper, navDom.current, options, activeChange);
			onScroll = () => instance.onScroll();
			onScroll();		
			scrollWrapper.addEventListener('scroll', onScroll);		
		});	
		
		return () => {
			if(onScroll)
				scrollWrapper.removeEventListener('scroll', onScroll);
			clearTimeout(timeId);
		};
		
	}, [count, more]);	
		
	const showCount = count || categorise.length;
	
	const itemClick = (event, id, popover = false) => {
		event.preventDefault();
		const section = document.getElementById(id);
		const scrollWrapper = document.getElementById("ScrollWrapper");
		scrollWrapper.scroll(0,section.offsetTop - 156);
		if(popover)
			closePopover();
	};

	const ResetCategory = () => (
		<List>
		{
			categorise.slice(showCount).map(({name, id}, index) =>
				<ListItem
					key={index}
					href={`#${id}`}
					component="a"
					className={classes.listItem}
					onClick={event => itemClick(event, id)}
				>
					<ListItemText className="truncate pr-0" primary={name} disableTypography={true}/>
				</ListItem>		
			)
		}
		</List>	
	);

	const categoryClick = (event) => {
		openPopover(event.currentTarget, {
			children: <ResetCategory />,
			classes: { paper: "w-64 h-auto" },
		});
	};

	return (
		<div className={classNames(className, classes.navWrapper)}>
			<nav className={classes.navigation} ref={measuredNav} id="desktop-category">
				{categorise.slice(0, showCount).map(({ name, id }, index) => (
					<li
						key={index}
						className={classes.categoryItem}
						onClick={(event) => itemClick(event, id)}
					>
						<a href={`#${id}`}>
							<div className={classNames(classes.LinkButton)}>{name}</div>
						</a>
					</li>
				))}
				{
					categorise.length - showCount === 1 && 
						<li
							className={classes.categoryItem}
							onClick={(event) => itemClick(event, categorise[categorise.length - 1].id)}
						>
							<a href={`#${categorise[categorise.length - 1].id}`}>
								<div className={classNames(classes.LinkButton)}>{categorise[categorise.length - 1].name}</div>
							</a>
						</li>
				}
				{ categorise.length - showCount > 1 &&(
					<Button
						className={classes.button}
						onClick={categoryClick}
						endIcon={<Icon>keyboard_arrow_down</Icon>}
					>
						{more}
					</Button>
				)}
			</nav>
		</div>
	);
};

const mapStateToProps = (state) => ({
	categorise: state.restaurant.restaurantProductCategorise,
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			openPopover,
			closePopover,
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(RestaurantCategory));
