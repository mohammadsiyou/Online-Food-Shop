import React, { useState } from "react";
import { Icon } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import FooterColumnTitle from "./FooterColumnTitle";
import FooterColumnList from "./FooterColumnList";
import { useSelector } from 'react-redux';
import { useRouteMatch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	arrowIcon: {
		fontSize: "20px",
		paddingTop: " 0.3rem",
	},
}));

const dishes = (
	<FormattedMessage
		id="home.footerRoot.Dishes"
		defaultMessage="Dishes and cuisine"
	/>
);
const regions = (
	<FormattedMessage id="home.footerRoot.Regions" defaultMessage="Regions" />
);

const FooterColumn = (props) => {
	const classes = useStyles();
	const match = useRouteMatch({path: '/:language/:city?'}); 
	const {language, city = 'all-city'} = match.params;
	const categorise = useSelector(state => state.leftover.leftOverCategories);
	const cities = useSelector(state => state.city.cities);
	const categoriseList = categorise.map(({title, slug}) => ({text:title, link:`/${language}/${city}/leftover/1/${slug}`}));
	const citiesList = cities.map(item => ({text:item.translate[language], link:`/${language}/${item.translate[language]}`}));
	
	const [showMore, setShowMore] = useState(false);
	const showMoreHandler = () => {
		setShowMore(true);
	};
	
	const showAllBtn = (
		<div
			className={classNames("mt-3 cursor-pointer", showMore ? "hidden" : null)}
			onClick={showMoreHandler}
		>
			<FormattedMessage
				id="home.footerColumn.ShowAll"
				defaultMessage="Show all"
			/>
			<Icon className={classes.arrowIcon}>chevron_right</Icon>
		</div>
	);

	return (
		<div className="flex flex-no-wrap">
			<div className="mr-24 text-base">
				<FooterColumnTitle title={regions} />
				<ul>
					<FooterColumnList showMore={showMore} footerList={citiesList} />
				</ul>
				{citiesList.length > 6 && showAllBtn}
			</div>
			<div className="mr-24 text-base">
				<FooterColumnTitle title={dishes} />
				<ul>
					<FooterColumnList showMore={showMore} footerList={categoriseList} />
				</ul>
				{categoriseList.length > 6 && showAllBtn}
			</div>
		</div>
	);
};

export default FooterColumn;
