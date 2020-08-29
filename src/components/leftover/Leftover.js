import React, { useCallback } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { openDialog } from "store/dialog";
import { getLeftOverCategories, getLeftOverSubjects } from "store/leftover";
import { getSetting } from "store/setting";
import { useRouteMatch } from "react-router-dom";
import MetaTags from 'react-meta-tags';

import LocationModal from "components/location/LocationModal";
import Hero from "./hero/Hero";
import Catalog from "./catalog/Catalog";
import Wrapper from "./wrapper/Wrapper";

const useStyles = makeStyles(() => ({
  root: {
    "& .heroWrapper": {
      padding: "51px 80px 56px",
      margin: "-1px -1px 0",
    },
    "& .catalogWrapper": {
      padding: "20px 80px 20px 20px",
      margin: "8px 0px",
    },
  },
}));

const Leftover = (props) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const match = useRouteMatch({path: '/:language/:city'}); 
	const setting = useSelector(state => state.setting, shallowEqual);
	const {scripts, seo} = setting;

	React.useEffect(() => {
		dispatch(getLeftOverCategories(match.params.language, match.params.city));
	}, [dispatch, match.params.language, match.params.city]);
	
 	React.useEffect(() => {
		dispatch(getLeftOverSubjects(match.params.language, match.params.city));
	}, [dispatch, match.params.language, match.params.city]);
  
  	React.useEffect(() => {
		dispatch(getSetting("leftover"));
	}, [dispatch]);	

	
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
	
	const mapClick = useCallback(() => {
		dispatch(openDialog({
			children: <LocationModal />,
			maxWidth: "md",
			fullWidth: true,
			fullScreen: false,
			scroll: "body",
			classes: { paper: "m-0 md:m-48" },
		}))		
	}, [dispatch]);
	
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
			<Hero className="heroWrapper" mapClick={mapClick} />
			<Catalog className="catalogWrapper" />
			<Wrapper className="contentWrapper"/>
		</div>
	);
};
export default Leftover;
