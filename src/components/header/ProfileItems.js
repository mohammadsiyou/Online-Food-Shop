import React from "react";
import { List, ListItem, Icon } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import { withStyles } from '@material-ui/core/styles';
import { useHistory, useRouteMatch } from 'react-router-dom';

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { openDialog } from "store/dialog";
import { userLogout } from "store/user";
import { closePopover } from "store/popover";

import UserInfo from "../user/user-information/UserInfo";
import UserOrder from "../user/user-order/UserOrder";
import UserAddress from "../user/user-address/UserAddress";

const styles = {
	listItem: {
		color: "inherit!important",
		textDecoration: "none!important",
		width: "100%",
		cursor: "pointer",
		fontSize: "18px",
		padding: "3px 5px 3px 8px",
		"&:hover": {
			color: " rgb(255, 224, 51) !important",
		},
	},
	orderWidth: {
		margin: "200px !important",
	},
	list: {
		padding: " 8px 5px",
		color: "#a0a0a0",
	},
	listTitle: {
		marginTop: "4px",
		marginLeft: "4px",
	},
};

const Item = withStyles(styles)((props) => (
	<div className="flex">
		<Icon>{props.icon}</Icon>
		<div className={props.classes.listTitle}>{props.title}</div>
	</div>
));
const title = {
	myInfo: (
		<FormattedMessage id="header.myInfo" defaultMessage="My Information" />
	),
	myAddresses: (
		<FormattedMessage id="header.myAddresses" defaultMessage="My Addresses" />
	),
	myOrders: (
		<FormattedMessage id="header.myOrders" defaultMessage="My Orders" />
	),
	logOut: <FormattedMessage id="header.logOut" defaultMessage="Log Out" />,
};
const ProfileItems = ({ classes, openDialog, closePopover, userLogout }) => {
	
	const history = useHistory();
	const match = useRouteMatch({path: '/:language/:city?'}); 
	const {language, city = ""} = match.params;
	
	const logout = () => {
		closePopover();
		userLogout();
		history.push(`/${language}/${city}`);
	};
	
	return (
		<List className={classes.list}>
			<ListItem
				className={classes.listItem}
				onClick={() =>
					openDialog({
						children: <UserInfo />,
						maxWidth: "sm",
						fullWidth: true,
						fullScreen: false,
						scroll: "body",
						classes: { paper: "m-0 md:m-48" },
					})
				}
			>
				<Item icon="person_outline" title={title.myInfo} />
			</ListItem>

			<ListItem
				className={classes.listItem}
				onClick={() =>
					openDialog({
						children: <UserAddress />,
						maxWidth: "sm",
						fullWidth: true,
						fullScreen: false,
						scroll: "body",
						classes: { paper: "m-0 md:m-48" },
					})
				}
			>
				<Item icon="location_on" title={title.myAddresses} />
			</ListItem>
			<ListItem
				className={classes.listItem}
				onClick={() =>
					openDialog({
						children: <UserOrder />,
						maxWidth: "md",
						fullWidth: true,
						fullScreen: false,
						scroll: "paper",
						classes: { paper: classes.orderWidth },
					})
				}
			>
				<Item icon="check" title={title.myOrders} />
			</ListItem>
			<ListItem
				className={classes.listItem}
				onClick={logout}
			>
				<Item icon="exit_to_app" title={title.logOut} />
			</ListItem>
		</List>
	);
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			openDialog,
			userLogout,
			closePopover,
		},
		dispatch
	);
}

export default withStyles(styles)(
	connect(null, mapDispatchToProps)(ProfileItems)
);
