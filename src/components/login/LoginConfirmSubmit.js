import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage, injectIntl } from "react-intl";
import { useDispatch } from "react-redux";
import {setAuthentication} from "store/user";
import {closeDialog} from 'store/dialog';

const useStyles = makeStyles((theme) => ({
	submitBtn: {
		border: " 1px solid rgb(255, 224, 51)",
		background: "rgb(255, 224, 51)",
		borderRadius: "3px",
		color:"#ccb04c",
	},
	codeInput: {
		height: " 34px",
		border: "1px solid #cccccc",
		boxShadow: "inset 0 1px 3px 0 rgba(0, 0, 0, 0.2)",
		borderRadius: "4px",
		flip:false,
		direction:'ltr',		
	},	
}));

const licenseLink = "#link";

const LoginConfirmSubmit = ({intl}) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [code, setCode] = React.useState("");
	const [message, setMessage] = React.useState("");
	const codeChange = event => setCode(event.target.value);
	const verification = () => {
		dispatch(setAuthentication(code)).then(data => {
			if(!data){
				setMessage("Server Error.");
				return;
			}
			if(data.payload.msgFlag !== "0")
				setMessage(data.payload.msgText);
			else
				dispatch(closeDialog());
		})
	};
	
	return (
		<>
			<div className="mt-8">
				<input
					className={classNames(classes.codeInput, "text-md px-3 py-1 w-full")}
					placeholder={intl.formatMessage({
						id: "home.loginConfirmCode.SmsCode",
						defaultMessage: "SMS code",
					})}
					onChange={codeChange}
				/>
			</div>		
			<button
				className={classNames(
					classes.submitBtn,
					"text-center font-bold w-full p-2 mt-5 text-lg",
					code && code.length > 3 ? "" : "cursor-not-allowed"
				)}
				disabled={code && code.length > 3 ? false : true}
				onClick={verification}
			>
				<FormattedMessage
					id="home.loginConfirmSubmit.Next"
					defaultMessage="Next"
				/>
			</button>
			<div className="my-2">{message}</div>
			<div className="text-md font-semibold pt-3">
				<FormattedMessage
					id="home.loginConfirmSubmit.AcceptCondition"
					defaultMessage="By clicking the 'Next' button, you accept the conditions"
				/>
				<br />
				<a className="underline" href={licenseLink}>
					<FormattedMessage
						id="home.loginConfirmSubmit.Agreement"
						defaultMessage="User agreement"
					/>
				</a>
			</div>
		</>
	);
};

export default injectIntl(LoginConfirmSubmit);
