import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useSelector, useDispatch } from 'react-redux';
import { useRouteMatch, Link } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import { getCities } from "store/city";

const useStyles = makeStyles((theme) => ({
	title: {
		flex: "0 0 100%",
		color: " #b0b0b0",
		fontSize: " 12px",
		marginBottom: "25px",
		letterSpacing: "2px",
		textTransform: "uppercase",
	},
	mainList: {
		flex: " 0 1 140px",
	},
	list: {
		color: " #6a6a6a",
		display: "block",
		fontSize: "12px",
		paddingBottom: "22px",
	},
}));

const MobileFooterRoot = ({ title, mobileList }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const match = useRouteMatch({path: '/:language/:city?'}); 
	const {language, city = 'all-city'} = match.params;
	
	const categorise = useSelector(state => state.leftover.leftOverCategories);
	const cities = useSelector(state => state.city.cities);
	const footerMenu = useSelector(state => state.setting.footerMenu);
		
	const categoriseList = categorise.map(({title, slug}) => ({text:title, link:`/${language}/${city}/leftover/1/${slug}`}));
	const citiesList = cities.map(item => ({text:item.translate[language], link:`/${language}/${item.translate[language]}`}));
	const footerList = footerMenu.map(({menutitle}) => ({text:menutitle, link:''}));	
	
	const dishes = (<FormattedMessage id="home.footerRoot.Dishes" defaultMessage="Dishes and cuisine"/>);
	const regions = (<FormattedMessage id="home.footerRoot.Regions" defaultMessage="Regions" />);	
	const aboutCompany = (<FormattedMessage id="home.footerColumnInfo.AboutCompany" defaultMessage="About company"/>);

	React.useEffect(() => {
		dispatch(getCities(language));
	}, [dispatch, language]);
	
	return (
		<div className="flex flex-wrap mx-5 my-5 justify-between md:hidden">
			<div>
				<div className={classes.title}>{regions}</div>
				<div className="flex flex-col">
				{
					citiesList.map((list, index) => (
						<Link to={list.link} className={classes.list} key={index}>{list.text}</Link>
					))
				}
				</div>
			</div>
			<div>
				<div className={classes.title}>{dishes}</div>
				<div className="flex flex-col rtl:mr-4 ltr:ml-4">
					{
						categoriseList.map((list, index) => (
							<Link to={list.link} className={classes.list} key={index}>{list.text}</Link>
						))
					}
				</div>
			</div>
			<div>
				<div className={classes.title}>{aboutCompany}</div>
				<div className="flex flex-col rtl:mr-4 ltr:ml-4">
					{
						footerList.map((list, index) => (
							<Link to={list.link} className={classes.list} key={index}>{list.text}</Link>
						))
					}
				</div>
			</div>			
		</div>
	);
};

export default MobileFooterRoot;
