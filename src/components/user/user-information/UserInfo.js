import React from "react";
import { IconButton, Icon } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "store/dialog";
import { profileUpdate } from "store/user";

import UserInfoInput from "./UserInfoInput";

const useStyles = makeStyles((theme) => ({
	closeButton: {
		position: "absolute",
		right: theme.spacing(1),
		top: theme.spacing(1),
		color: theme.palette.grey[500],
	},
	submitBtn: {
		border: " 1px solid rgb(255, 224, 51)",
		backgroundColor: "rgb(255, 224, 51)",
		borderRadius: "3px",
	},
	cancelBtn: {
		border: " 1px solid #f5f5f5",
		background: "#f5f5f5",
		borderRadius: "3px",
	},
}));

function reducer(state, { field, value }) {
	return {
		...state,
		[field]: value,
	};
}
	
const UserInfo = ({ userInfo, closeDialog, profileUpdate }) => {
	
	const classes = useStyles();
	
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
		profileUpdate(state);
		closeDialog();
	};

	return (
		<div className="relative">
			<IconButton
				aria-label="close"
				className={classes.closeButton}
				onClick={closeDialog}
			>
				<Icon color="action">close</Icon>
			</IconButton>
			<div className="text-md py-12 px-10">
				<div className="font-bold text-4xl">
					<h1>
						<FormattedMessage
							id="header.myInfo"
							defaultMessage="My Information"
						/>
					</h1>
				</div>
				<UserInfoInput state={state} handleChange={handleChange} />
				<div className="flex flex-row my-5">
					<button
						className={classNames(
							classes.submitBtn,
							"text-center font-bold w-2/5 py-3 mt-5 text-base"
						)}
						onClick={updateProfile}
					>
						<FormattedMessage
							id="home.userInfo.SaveChanges"
							defaultMessage="Save Changes"
						/>
					</button>
					<button
						className={classNames(
							classes.cancelBtn,
							"text-center w-1/3 py-3 mt-5 text-base ml-4"
						)}
						onClick={() => closeDialog()}
					>
						<FormattedMessage
							id="home.mobileSearchInput.Cancel"
							defaultMessage="Cancel"
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

function mapStateToProps(state) {
	return { userInfo: state.user.userInfo };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			closeDialog: Actions.closeDialog,
			profileUpdate,
		},
		dispatch
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
