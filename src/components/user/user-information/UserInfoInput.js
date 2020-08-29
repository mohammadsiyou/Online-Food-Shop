import React from "react";
import { withStyles } from '@material-ui/core/styles';
import {
	Checkbox,
	FormGroup,
	FormControlLabel,
	FormControl,
} from "@material-ui/core";
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { injectIntl } from "react-intl";

const styles = {
	codeInput: {
		height: " 34px",
		border: "1px solid #cccccc",
		boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.2)",
		borderRadius: "4px",
	},
	phoneCode: {
	flip:false,
		left: "4px",
		top: "0px",
		paddingTop: "1px",
		display: "flex",
		position: "absolute",
		alignItems: "center",
		pointerEvents: "none",
		lineHeight: "32px",
	},
	marginLeft: {
		marginLeft: "3.2rem",
	},
	ltr:{
		flip:false,
		direction:'ltr',
	},
};

const emailCheckbox = {
	name: (
		<FormattedMessage id="home.userInfoInput.Email" defaultMessage="Email" />
	),
};
const smsCheckbox = {
	name: (
		<FormattedMessage
			id="home.userInfoInput.Advertisment"
			defaultMessage="Advertising and promotions"
		/>
	),
};
const advertisment = {
	name: (
		<FormattedMessage
			id="home.userInfoInput.Notification"
			defaultMessage="Push notifications and SMS"
		/>
	),
};

const YellowCheckbox = withStyles({
	root: {
		color: "#dcdbdb",
		padding: "3px",
		fontSize: "20px",
		"&:hover, &:focus": {
			backgroundColor: "transparent",
		},
		"&$checked": {
			color: "rgb(255, 224, 51)",
		},
	},
	checked: {},
})((props) => <Checkbox color="default" {...props} />);

const UserInfoInput = ({ classes, intl, userInfo, state, handleChange }) => {

	const nameInput = {
		name: (
			<FormattedMessage id="home.userInfoInput.Name" defaultMessage="Name" />
		),
		placeholder: intl.formatMessage({
			id: "home.userInfoInput.YourName",
			defaultMessage: "Your Name",
		}),
	};
	const emailInput = {
		name: (
			<FormattedMessage id="home.userInfoInput.Email" defaultMessage="Email" />
		),
		placeholder: intl.formatMessage({
			id: "home.userInfoInput.Email",
			defaultMessage: "Email",
		}),
	};
	const tellInput = {
		name: (
			<FormattedMessage id="home.userInfoInput.Phone" defaultMessage="Phone" />
		),
		placeholder: intl.formatMessage({
			id: "home.userInfoInput.Phone",
			defaultMessage: "Phone",
		}),
	};

	const { name, email, tell, emailCheck, smsCheck } = state;

	return (
		<>
			<div className="flex flex-row mt-8 mb-5">
				<div className="w-1/3 font-bold text-lg">{nameInput.name}</div>
				<input
					className={classNames(classes.codeInput, "text-md px-3 py-1 w-2/4")}
					name="name"
					placeholder={nameInput.placeholder}
					value={name}
					onChange={handleChange}
					type="text"
				/>
			</div>
			<div className="flex flex-row my-5">
				<div className="w-1/3 font-bold text-lg">{emailInput.name}</div>
				<input
					className={classNames(classes.codeInput, "text-md px-3 py-1 w-2/4")}
					name="email"
					placeholder={emailInput.placeholder}
					value={email}
					onChange={handleChange}
					type="text"
				/>
			</div>
			<div className="flex flex-row my-5">
				<div className="w-1/3 font-bold text-lg">{tellInput.name}</div>
		<div className={classNames("w-2/4 relative", classes.ltr)}>
			<input
				className={classNames(
				classes.codeInput,
				"text-md pl-8 pr-3 py-1 w-full"
				)}
				name="tell"
				placeholder={tellInput.placeholder}
				value={tell}
				onChange={handleChange}
				type="number"
			/>
			<div className={classes.phoneCode}>+98</div>
		</div>
			</div>
			<div className="flex flex-row my-5">
				<div className="w-1/4 font-bold text-lg mt-2">{advertisment.name}</div>
				<FormControl component="fieldset" className={classes.marginLeft}>
					<FormGroup aria-label="position">
						<FormControlLabel
							checked={emailCheck}
							control={
								<YellowCheckbox
									onChange={handleChange}
									inputProps={{ "aria-label": "checkbox" }}
									name="emailCheck"
								/>
							}
							label={emailCheckbox.name}
							labelPlacement="end"
						/>
						<FormControlLabel
							checked={smsCheck}
							control={
								<YellowCheckbox
									onChange={handleChange}
									inputProps={{ "aria-label": "checkbox" }}
									name="smsCheck"
								/>
							}
							label={smsCheckbox.name}
							labelPlacement="end"
						/>
					</FormGroup>
				</FormControl>
			</div>
		</>
	);
};



export default withStyles(styles)(injectIntl(UserInfoInput));