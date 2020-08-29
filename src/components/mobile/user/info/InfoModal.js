import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { useSelector, useDispatch } from 'react-redux';
import { closeDialog } from 'store/dialog';
import { profileUpdate } from "store/user";

import InfoTextField from "./InfoTextField";
import ModalHeader from "../ModalHeader";

const useStyles = makeStyles((theme) => ({
	submitBtn: {
		border: " 1px solid rgb(255, 224, 51)",
		background: "rgb(255, 224, 51)",
		borderRadius: "8px",
	},
	borderBottom: {
		borderBottom: " 1px solid #e0e0e0",
	},
	label: {
		color: " #b0b0b0",
		top: "-18px",
	},
	input: {
		flex: "1 1 auto",
	},
}));

function reducer(state, { field, value }) {
	return {
		...state,
		[field]: value,
	};
}
	
const InfoModal = () => {
	const classes = useStyles();
	const userInfo = useSelector(state => state.user.userInfo);
	const reduxDispatch = useDispatch();
	
	const initialState = {
		name: userInfo.name,
		email: userInfo.Email,
		tell: userInfo.phone,
		emailCheck: userInfo.Push_email,
		smsCheck: userInfo.Push_ads,
	};
	
	const [state, dispatch] = React.useReducer(reducer, initialState);
		
	const handleChange = (event) => {
		dispatch({ field: event.target.name, value: event.target.type === 'checkbox' ? event.target.checked : event.target.value });
	};	
	
	const updateProfile = () => {
		reduxDispatch(profileUpdate(state));
		reduxDispatch(closeDialog());
	};
	
	return (
		<>
			<ModalHeader
				title={
					<FormattedMessage
						id="header.myInfo"
						defaultMessage="My Information"
					/>
				}
			/>
			<div className="m-4">
				<div className="mt-16">
					<div className={classNames(classes.container, "flex")}>
						<InfoTextField state={state} handleChange={handleChange}/>
					</div>
				</div>
				<button
					className={classNames(
						classes.submitBtn,
						"text-center w-full px-2 py-5 mt-5 text-base"
					)}
					onClick={updateProfile}
				>
					<FormattedMessage
						id="home.userInfo.SaveChanges"
						defaultMessage="Save changes"
					/>
				</button>
			</div>
		</>
	);
};

export default InfoModal;
