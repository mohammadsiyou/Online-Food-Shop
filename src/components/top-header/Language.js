import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import {
	Icon,
	List,
	ListItem,
	ListItemText,
} from "@material-ui/core";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { useRouteMatch, useHistory } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { openPopover, closePopover } from "store/popover";

const useStyles = makeStyles({
	button: {
		cursor: "pointer",
		padding: "0px 4px",
		"&:hover": {
			background: "#ebebeb",
		},
	},
	listItem: {
		display: "flex",
		alignItems: "start",
	},
});

const Language = ({
	languages,
	categorise,
	openPopover,
	closePopover,
	cities,
	profile,
}) => {
	
	const match = useRouteMatch({path: '/:language/:city?/:page?/:pageNumber?/:category?'});
	const history = useHistory();
	const classes = useStyles();

	const LanguageList = () => (
		<List>
			{languages.map((item, index) => (
				<ListItem
					button
					className={classes.listItem}
					key={index}
					onClick={() => selectLanguage(item)}
				>
					{item.icon && (
						<img src={item.icon} alt={item.name} className="max-h-6 max-w-6 mr-2" />
					)}

					<ListItemText
						className="truncate pr-0"
						primary={item.name}
						disableTypography={true}
					/>
				</ListItem>
			))}
		</List>
	);

	const selectLanguage = (item) => {
		const city = cities.find(item => item.translate[match.params.language] === match.params.city);
		const cityTitle = city ? city.translate[item.locale] : 'all-city'; 
		let link = `/${item.locale}/${cityTitle}`;
		if(match.params.page)
			link += `/${match.params.page}`;
	
		if(match.params.page === "leftover" ){
			if(match.params.pageNumber)
				link += `/${match.params.pageNumber}`;			
			if(match.params.category){
				const category = categorise.find(item => item.slug === match.params.category);
				const categoryTitle = category ? category.translate[item.locale] : '';
				if(categoryTitle)
					link += `/${categoryTitle}`;			
			}
		}
		else if(match.params.page ==="profile"){
			link += `/${profile.translate[item.locale]}`;
		}
		
		history.push(history.location.pathname.replace(match.url, link));
		closePopover();
	};

	const languageClick = (event) => {
		openPopover(event.currentTarget, {
			children: <LanguageList />,
			classes: { paper: "w-64 h-auto" },
		});
	};

	return (
		<div>
			<div 
				className={classNames("flex items-center h-full", classes.button)}
				onClick={languageClick}
			>
				<span><FormattedMessage id="topheader.Language" defaultMessage="Language" />:</span>
				<span className="mx-2 text-black capitalize">{match !== null && match.params.language}</span>
				<Icon className="cursor-pointer">arrow_drop_down</Icon>
			</div>
		</div>
	);
};
const mapStateToProps = (state) => ({
	languages	: state.locale.languages,
	cities		: state.city.cities,
	categorise	: state.leftover.leftOverCategories,
	profile		: state.profile.detail,
});

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			closePopover,
			openPopover,
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(Language);
