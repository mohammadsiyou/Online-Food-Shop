import React, { useState } from "react";
import {
	FormControl,
	FormLabel,
	FormControlLabel,
	RadioGroup,
	Radio,
	Icon,
} from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import { makeStyles } from '@material-ui/core/styles';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { changeLeftOverFilters } from "store/leftover";
import { closePopover } from "store/popover";

const useStyles = makeStyles({
	root: {
		"&:hover": {
			backgroundColor: "transparent",
		},
	},
	buttonRoot: {
		padding: "1.2rem",
		borderTop: "1px solid rgba(0,0,0,.05)",
	},
	button: {
		color: "#000000",
		background: "rgb(255, 224, 51)",
		fontWeight: "bold",
		borderRadius: "4px",
		padding: "12px 0px",
		textAlign: "center",
	},
	icon: {
		color: "#ffe033",
	},
});

function StyledRadio(props) {
	const classes = useStyles();

	return (
		<Radio
			className={classes.root}
			disableRipple
			color="default"
			checkedIcon={<Icon className={classes.icon}>radio_button_checked</Icon>}
			icon={<Icon>radio_button_unchecked</Icon>}
			{...props}
		/>
	);
}

const buttonText = (
	<FormattedMessage id="home.mobileSearchBox.Show" defaultMessage="Show" />
);

const sortTitle = (
	<FormattedMessage
		id="home.mobileSearchBox.ShowFirst"
		defaultMessage="Which one should be shown first?"
	/>
);

const Sort = ({ sortList, changeLeftOverFilters, currentSort, closePopover }) => {
	const classes = useStyles();
	const [value, setValue] = useState(currentSort);

	const handleValue = (event) => {
		setValue(event.target.value);
	};
	
	const selectSortItem = event => {
		changeLeftOverFilters({seed:value});
		closePopover();
	};
	
	return (
		<div className="flex flex-col justify-between h-full">
			<div className="p-8">
				<FormControl component="fieldset">
					<FormLabel component="legend" className="mb-4 font-bold">
						{sortTitle}
					</FormLabel>
					<RadioGroup value={value} name="sort" onChange={handleValue}>
						{sortList.map(({ name, id }, index) => (
							<FormControlLabel
								value={id}
								control={<StyledRadio />}
								label={name}
								key={index}
							/>
						))}
					</RadioGroup>
				</FormControl>
			</div>
			<button className={classes.buttonRoot} onClick={selectSortItem}>
				<div className={classes.button}>{buttonText}</div>
			</button>
		</div>
	);
};
function mapStateToProps(state) {
	return {
		sortList: state.restaurant.sortList,
		currentSort: state.leftover.leftOversFilters.seed,
	};
}
function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			changeLeftOverFilters,
			closePopover,
		},
		dispatch
	);
}
export default connect(mapStateToProps, mapDispatchToProps)(Sort);
