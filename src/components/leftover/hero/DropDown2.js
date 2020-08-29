import React from "react";
import { injectIntl } from "react-intl";
import { useSelector, useDispatch } from 'react-redux';
import { changeLeftOverFilters } from "store/leftover";
import DropDown from "./CustomizedDropDown";

const DropDown2 = ({ intl }) => {
	const subjects = useSelector(state => state.leftover.leftOverSubjects);
	const dispatch = useDispatch();
	const subject = useSelector(state => state.leftover.leftOversFilters.subject);
	const subjectObject = subjects.find(item => item.title === subject);
	
	const input = {
		placeholder: intl.formatMessage({
			id: "home.hero.ShippingAddress",
			defaultMessage: "Enter shipping address ...",
		}),
	};
	
	const onChange = (event, newValue) => dispatch(changeLeftOverFilters({subject:newValue ? newValue.title : ''}));
	
	return (
		<DropDown
			name="subject"
			options={subjects}
			label={input.placeholder}
			onChange={onChange}
			value={subjectObject}
		/>
	);
};

export default injectIntl(DropDown2);