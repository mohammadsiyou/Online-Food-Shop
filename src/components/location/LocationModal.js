import React, { useState } from "react";
import { Icon, IconButton } from "@material-ui/core";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { injectIntl } from "react-intl";
import { makeStyles } from '@material-ui/core/styles';

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { closeDialog } from "store/dialog";
import { locationChange } from "store/location";

import GoogleAutocomplete from "./GoogleAutocomplete";
import GoogleMap from "./GoogleMap";

const useStyles = makeStyles((theme) => ({
	wrapper: {
		display: "flex",
		padding: "10px",
		position: "relative",
		minWidth: "800px",
		fontSize: "16px",
		background: "white",
		minHeight: "400px",
		flexDirection: "column",
	},
	closeButton: {
		position: "absolute",
		right: theme.spacing(1),
		top: theme.spacing(-1),
		color: theme.palette.grey[500],
	},
	modalTitle: {
		fontSize: "1.7rem",
	},
	nearWrapper: {
		border: " 1px solid rgb(255, 224, 51)",
		fontWeight: "bold",
	},
	input: {
		border: "1px solid #cccccc",
		boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.2)",
		borderLeft: 0,
		padding: "10px !important",
		"&::placeholder": {
			color: "rgb(117, 117, 117)",
		},
		borderRadius: " 0 5px 5px 0",
	},
	mapBtn: {
		background: "rgb(255, 224, 51)",
		border: "rgb(255, 224, 51)",
	},
	searchButton: {
		border: " 1px solid rgb(255, 224, 51)",
		fontWeight: "bold",
		minWidth: 150,
	},
	okBtn: {
		width: "15%",
	},
	addressContent: {
		fontSize: " 19px",
		background: "rgb(255, 224, 51)",
		alignItems: "center",
		fontWeight: "bold",
		padding: "10px !important",
		borderRadius: " 0 5px 5px 0",
	},
	mapwrapper: {
		height: 350,
	},
}));

const LocationModal = (props) => {
	const { locationChange, closeDialog, location, intl } = props;
	const classes = useStyles();

	const [address, setAddress] = useState(location);

	const addressHandler = React.useCallback(
		(item) => {
			setAddress(item);
		},
		[setAddress]
	);

	const addressOnClick = () => {
		locationChange(address);
		closeDialog();
	};
	const autoAddress = address ? address.description : null;
	const lat = address ? address.lat : 34.33781482366286;
	const lng = address ? address.lng : 47.088752098083496;
	const inputChanged = address ? address.inputChanged : false;
	
	return (
		<div className="relative overflow-hidden p-6">
			<div className={classes.wrapper}>
				<IconButton
					aria-label="close"
					className={classes.closeButton}
					onClick={closeDialog}
				>
					<Icon color="action">close</Icon>
				</IconButton>
				<div id="customized-dialog-title" className="pb-5 mt-6 relative">
					<div className={classes.modalTitle}>
						<FormattedMessage
							id="home.hero.ShippingAddress"
							defaultMessage="Enter shipping address"
						/>
					</div>
					<div className="flex flex-row justify-between mt-4 h-12">
						<div className="w-5/6 flex flex-no-wrap w-5/6 ">
							<button
								className={classNames(
									classes.searchButton,
									"flex items-center justify-center leading-tight px-2 h-full rounded rtl:rounded-l-none ltr:rounded-r-none text-md"
								)}
							>
								<Icon className="rtl:ml-1 ltr:mr-1">
									near_me
								</Icon>
								<div>
									<FormattedMessage
										id="home.locationModal.Identify"
										defaultMessage="Identify"
									/>
								</div>
							</button>
							<GoogleAutocomplete
								placeholder={intl.formatMessage({
									id: "home.locationModal.Indicate",
									defaultMessage: "or indicate ...",
								})}
								locationChange={addressHandler}
								classNames={classNames(
									address ? classes.addressContent : classes.input,

									"rounded-md rtl:rounded-r-none ltr:rounded-l-none px-3 w-full h-full placeholder-gray-600"
								)}
								location={autoAddress}
							/>
						</div>
						<div className={classes.okBtn}>
							<button
								disabled={!address}
								onClick={addressOnClick}
								className={classNames(
									address ? null : "font-bold cursor-not-allowed opacity-50",
									classes.mapBtn,
									"px-4 rounded w-full h-full"
								)}
							>
								<FormattedMessage
									id="home.locationModal.Ok"
									defaultMessage="Ok"
								/>
							</button>
						</div>
					</div>
				</div>
				<div className={classes.mapwrapper}>
					<GoogleMap locationChange={addressHandler} lat={lat} lng={lng} inputChanged={inputChanged}/>
				</div>
			</div>
		</div>
	);
};

function mapStateToProps(state) {
	return { location: state.location.current };
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
		{
			closeDialog,
			locationChange,
		},
		dispatch
	);
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(injectIntl(LocationModal));
