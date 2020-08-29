import React from "react";
import { injectIntl } from "react-intl";
import { useSelector } from 'react-redux';
import { useRouteMatch, useHistory } from "react-router-dom";

import DropDown from "./CustomizedDropDown";

const DropDown1 = ({ intl }) => {
	const categorise = useSelector(state => state.leftover.leftOverCategories);
	const match = useRouteMatch({path: '/:language/:city/leftover/:pageNumber?/:category?'});
	const history = useHistory();
	
	const input = {
		placeholder: intl.formatMessage({
			id: "home.hero.ShippingAddress",
			defaultMessage: "Enter shipping address ...",
		}),
	};
	
	let value = match.params.category || null;
	if(value){
		const category = categorise.find(item => item.slug === value); 
		if(category)
			value = category;
	}
	const {language, city} = match.params;
	
	let link = `/${language}/${city}/leftover/1`;
	
	return (
		<DropDown
			options={categorise}
			label={input.placeholder}
			name="category"
			value={value}
			onChange={(event, value) => {
				if(value === null)
					history.push(link);
				else
					history.push(`${link}/${value.slug}`);
			}}
		/>
	);
};

export default injectIntl(DropDown1);