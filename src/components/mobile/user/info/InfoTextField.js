import React from "react";
import classNames from "classnames";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {
	Checkbox,
	FormGroup,
	FormControlLabel,
	TextField,
	FormControl,
} from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import { injectIntl } from "react-intl";

const InfoField = withStyles({
	root: {
		"& label.Mui-focused": {
			color: "#a9a6a6",
		},
		"& .MuiInput-underline:after": {
			borderBottomColor: "#e0e0e0",
		},
		"& .MuiInput-underline:before": {
			borderBottomColor: "#e0e0e0",
		},
		"& .MuiOutlinedInput-root": {
			"& fieldset": {
				borderColor: "#e0e0e0",
			},
			"&:hover fieldset": {
				borderColor: "#e0e0e0",
			},
			"&.Mui-focused": {
				border: "1px solid #e0e0e0",
			},
		},
	},
})(TextField);

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexWrap: "wrap",
		width: "100%",
		zIndex: 10,
	},
	margin: {
		marginTop: theme.spacing(1),
		width: "100%",
	},
	advertisment: {
		borderBottom: "1px solid #e0e0e0",
	},
	adText: {
		color: "#b0b0b0",
		fontSize: "12px",
		marginBottom: " 5px",
		marginTop: "13px",
	},
	label: {
		margin: 0,
	},
}));

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

const InfoTextField = ({ intl, state, handleChange }) => { 

	const classes = useStyles();
	
	const nameInput = {
		name: (
			<FormattedMessage id="home.userInfoInput.Name" defaultMessage="Name" />
		),
		placeholder: intl.formatMessage({
			id: "home.userInfoInput.YourName",
			defaultMessage: "Your Name",
		}),
		value: "",
	};
	
	const emailInput = {
		name: (
			<FormattedMessage id="home.userInfoInput.Email" defaultMessage="Email" />
		),
		placeholder: intl.formatMessage({
			id: "home.userInfoInput.Email",
			defaultMessage: "Email",
		}),
		value: "",
	};
	
	const tellInput = {
		name: (
			<FormattedMessage id="home.userInfoInput.Phone" defaultMessage="Phone" />
		),
		placeholder: intl.formatMessage({
			id: "home.userInfoInput.Phone",
			defaultMessage: "Phone",
		}),
		value: "",
	};

	const { name, email, tell, emailCheck, smsCheck } = state;
	
	return (
		<form className={classes.root} noValidate>
			<InfoField
				name="name"
				className={classes.margin}
				value={name}
				label={nameInput.name}
				onChange={handleChange}
			/>
			<InfoField
				name="email"
				value={email}
				className={classes.margin}
				label={emailInput.name}
				onChange={handleChange}
			/>
			<InfoField
				name="tell"
				value={tell}
				className={classes.margin}
				label={tellInput.name}
				onChange={handleChange}
			/>
			<div className={classNames(classes.advertisment, "w-full pb-2")}>
				<div className={classes.adText}>{advertisment.name}</div>
				<FormControl component="fieldset" className="w-full">
					<FormGroup aria-label="position">
						<FormControlLabel
							checked={emailCheck}
							className={classNames(
								classes.label,
								"flex flex-row-reverse justify-between"
							)}
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
							className={classNames(
								classes.label,
								"flex flex-row-reverse justify-between"
							)}
							value="end"
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
		</form>
	);
};

export default injectIntl(InfoTextField);
