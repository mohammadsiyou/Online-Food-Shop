import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import PaginationItem from '@material-ui/lab/PaginationItem';
import { useDispatch, useSelector } from 'react-redux';
import { getLeftOverCategories, getLeftOverSubjects } from "store/leftover";
import { getSetting } from "store/setting";
import { useRouteMatch, useHistory, Link } from "react-router-dom";
import MetaTags from 'react-meta-tags';

import MobileLeftoverHero from './MobileLeftoverHero';
import MobileLeftoverCategory from "./MobileLeftoverCategory";
import Content from "components/leftover/wrapper/Content";


const useStyles = makeStyles(() => ({
	root:{
		'& .heroWrapper':{
			"padding": "40px 24px",
			"& .searchButton": {
				"minWidth": "120px",
			},				
			"& .searchInput": {
				"width": "100%",
			},				
			"& .advanceItems": {
				"& .column":{
					"flex": "1 1 calc(25% - 2em)",
					"margin":"12px 0px",
					"minWidth": "300px",
				},
			},				
		},		
		'& .categoryWrapper':{
			"background": "white",
			"borderBottom": "none",
		},
		'& .paginationWrapper':{
			"padding": "12px 0px",
			"borderTop": "1px solid #e6e6e6",
			"background": "white",
		},
		'& .contentWrapper':{
			"& .cartWrapper":{
				"flexWrap": "wrap",
				"& .imageItem":{
					"flex": "1 0 100%",
				},
				"& .mainItem":{
					"width": "100%",
					"padding": "12px 4px",
					"borderBottom": "1px solid #e6e6e6"
				},
				"& .bottomItem":{
					"flexWrap": "wrap",
					"flexDirection": "row",
					"width": "100%",
					"padding": "12px 4px",
					"& .starsWrapper": {
						"display": "none",
						"flex": "1 1 100%",
						"textAlign": "center",
						"marginBottom": "12px",
					},
				},
			},		
		},
	},
}));

const MobileLeftover = (props) => {
	
	const classes = useStyles();	
	const dispatch = useDispatch();
	const history = useHistory();
	const match = useRouteMatch({path: '/:language/:city/leftover/:pageNumber?/:category?'}); 
	const setting = useSelector(state => state.setting);
	const {limit} = useSelector(state => state.leftover.leftOversFilters);
	const totalCount = useSelector(state => state.leftover.leftOversTotalCount);
	
	const pageCount = Math.ceil(totalCount / limit);
	const {scripts, seo} = setting;
	const {language, city, pageNumber, category} = match.params;
	
	let page = parseInt(pageNumber, 10) || 1;
	let path = `/${language}/${city}/leftover`;
	let link = `${path}/1`;
	if(category)
		link += `/${category}`;	
	
	React.useEffect(() => {
		dispatch(getLeftOverCategories(language, city));
		dispatch(getLeftOverSubjects(language, city));
		dispatch(getSetting("leftover"));
	}, [dispatch, language, city]);
	
	React.useEffect(() => {
		if(page > pageCount && pageCount)		
			history.push(link);	
	}, [pageCount, page, history, link]);	
		
	React.useEffect(() => {
		if(scripts.length === 0)
			return;		
		const script = document.createElement('script');
		script.type = 'application/ld+json';
		script.async = true;	
		script.innerHTML = scripts[0].scriptContent;
		document.body.appendChild(script);
		
		return () => {
			document.body.removeChild(script);
		}
	}, [scripts]);
	
	
	const MetaContents = () => {
		return (
			<MetaTags>
			{
				seo.map(({type, value, name, sizes}, index) => {
					if(type === "title")
						return <title key={index}>{value}</title>
					if(type === "rel")
						return  <link key={index} rel={name} href={value} sizes={sizes} />
					if(type === "itemprop")
						return <meta key={index} itemProp={name} content={value} />
					if(type === "property")
						return <meta key={index} property={name} content={value} />
					else
						return <meta key={index} name={name} content={value} />
				})
			}
			</MetaTags>		
		);	
	};	
	
	return (
		<div className={classes.root}>
			<MetaContents />
			<MobileLeftoverHero className="heroWrapper" />
			<MobileLeftoverCategory className="categoryWrapper" />
			<Pagination 
				count={pageCount} 
				page={page} 
				showFirstButton 
				showLastButton 			
				renderItem={(item) => {
					let link = `${path}/${item.page}`;
					if(category)
						link += `/${category}`;
					return (
						<PaginationItem
							component={Link}
							to={link}
							{...item}
						/>
					)
				}}				
				className="paginationWrapper" 
			/>	
			<Content className="contentWrapper" />		
		</div>
	);
};
export default MobileLeftover;