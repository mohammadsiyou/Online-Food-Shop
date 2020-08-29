import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage, injectIntl } from "react-intl";
import { useDispatch } from "react-redux";
import {setAuthentication} from "store/user";
import {closeDialog} from 'store/dialog';

const useStyles = makeStyles((theme) => ({
	inputContainer: {
		height: "53px",
		border: "1px solid rgba(0,0,0,.05)",
		maxWidth: "335px",
		fontSize: "16px",
		boxShadow: "none",
		lineHeight: "16px",
		borderRadius: "12px 12px 0 0",
		letterSpacing: "1px",
	},
	input: {
		borderRadius: " 12px 12px 0 0",
		paddingLeft: "1.3rem",
		flip:false,
		direction:'ltr',		
	},
	code: {
		lineHeight: "32px",
		pointerEvents: "none",
	},
	btn: {
		borderRadius: "0 0 12px 12px",
		backgroundColor: " rgb(255, 224, 51)",
		maxWidth: " 335px",
	},
	phoneCode:{
		flip:false,
		position:'absolute',
		top:'35%',
		left:'45%',
	},
	
}));

const MobileLoginCode = React.forwardRef(({intl}, ref) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [code, setCode] = useState("");
	const [message, setMessage] = React.useState("");
	
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
		<div className="text-center p-8" ref={ref}>
			<div className="text-lg font-bold">
				<FormattedMessage
					id="home.login.EnterCode"
					defaultMessage="Please enter the code"
				/>
			</div>
			<div
				className={classNames(
					"w-full inline-flex text-center my-0 mx-auto mt-8 relative",
					classes.inputContainer
				)}
			>
				<input
					value={code}
					onChange={(e) => setCode(e.target.value)}
					className={classNames("w-full h-full border-none text-center",
						classes.input
					)}
					placeholder={intl.formatMessage({
						id: "home.loginConfirmCode.SmsCode",
						defaultMessage: "SMS code",
					})}					
				/>				
			</div>
			<button
				className={classNames(
					"w-full block my-0 mx-auto p-5 font-bold text-md",
					classes.btn,
					code && code.length > 3 ? "" : "cursor-not-allowed"
				)}
				onClick={verification}
				disabled={code && code.length > 3 ? false : true}
			>
				<FormattedMessage
					id="home.loginConfirmSubmit.Next"
					defaultMessage="Next"
				/>
			</button>
			<div className="my-2">{message}</div>
		</div>
	);
});

export default injectIntl(MobileLoginCode,  { forwardRef: true });
