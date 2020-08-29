import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { useHistory, useRouteMatch } from 'react-router-dom';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { userLogout } from "store/user";

const useStyles = makeStyles((theme) => ({
	divid: {
		backgroundColor: "rgba(0, 0, 0, 0.05)",
	},
	menuIcon: {
		width: "24px",
		height: " 24px",
		display: "inline-block",
		backgroundSize: "24px 24px",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
	},
	dialogPaper: {
		height: "100%",
		width: "100%",
		margin: 0,
		maxWidth: "none",
		borderRadius: 0,
	},
}));

const orderIcon = {
	src: "/static/images/header/exit.svg",
	alt: "order",
};

const MobileUserLogout = ({ userLogout }) => {
	const classes = useStyles();
	const history = useHistory();
	const match = useRouteMatch({path: '/:language/:city?'}); 
	const {language, city = ""} = match.params;
	
	const logout = () => {
		userLogout();
		history.push(`/${language}/${city}`);
	};	

	const OrderButton = () => (
		<button
			onClick={logout}
			className={classNames("text-black flex items-center p-5 text-md w-full")}
		>
			<div className={classes.menuIcon}>
				<img alt={orderIcon.alt} src={orderIcon.src} />
			</div>
			<div className="rtl:mr-2 ltr:ml-2">
				<FormattedMessage id="header.logOut" defaultMessage="Log Out" />
			</div>
		</button>
	);
	return <OrderButton />;
};
function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			userLogout,
		},
		dispatch
	);
}
export default connect(null, mapDispatchToProps)(MobileUserLogout);
