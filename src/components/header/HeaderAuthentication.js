import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";

import { useDispatch, useSelector } from "react-redux";
import { FormattedMessage } from "react-intl";

import { openDialog } from "store/dialog";
import { openPopover } from "store/popover";

import HeaderButton from "./HeaderButton";
import Login from "../login/Login";
import ProfileItems from "./ProfileItems";

const useStyles = makeStyles((theme) => ({
	menu: {
		top: "95px !important",
		borderRadius: 0,
		boxShadow: "none",
	},
}));

const HeaderAuthentication = () => {
	const classes = useStyles();
	const dispatch = useDispatch();
	
	const {id} = useSelector(state => state.user.userInfo);

	const profileClick = (event) => {
		dispatch(openPopover(event.currentTarget, {
			children: <ProfileItems />,
			classes: { paper: classNames("w-48 h-auto", classes.menu) },
		}));
	};

	const LoginClick = () => {
		dispatch(openDialog({
			children: <Login />,
			maxWidth: "sm",
			fullWidth: true,
			fullScreen: false,
			scroll: "body",
			classes: { paper: "m-0 md:m-48" },
		}));
	};
	const login = <FormattedMessage id="header.Login" defaultMessage="Login" />;
	const profile = (
		<FormattedMessage id="header.Profile" defaultMessage="Profile" />
	);
		
	return id ? 
		<HeaderButton textButton={profile} onClick={profileClick} /> 
		: 
		<HeaderButton textButton={login} onClick={LoginClick} />;
};


export default HeaderAuthentication;
