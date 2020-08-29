import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage } from "react-intl";
import { useDispatch } from "react-redux";
import {getVerificationCode} from "store/user";

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
	disclaimer: {
		color: " #b0b0b0",
		fontSize: "12px",
	},
	phoneCode:{
		flip:false,
		position:'absolute',
		top:'35%',
		left:'45%',
	},	
}));

const MobileLoginBody = React.forwardRef(({nextPage}, ref) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [number, setNumber] = useState("");
	const [message, setMessage] = React.useState("");
	
	const isNumericInput = (event) => {
		const key = event.keyCode;
		return (
			(key >= 48 && key <= 57) || // Allow number line
			(key >= 96 && key <= 105) // Allow number pad
		);
	};

	const isModifierKey = (event) => {
		const key = event.keyCode;
		return (
			event.shiftKey === true ||
			key === 35 ||
			key === 36 || // Allow Shift, Home, End
			key === 8 ||
			key === 9 ||
			key === 13 ||
			key === 46 || // Allow Backspace, Tab, Enter, Delete
			(key > 36 && key < 41) || // Allow left, up, right, down
			// Allow Ctrl/Command + A,C,V,X,Z
			((event.ctrlKey === true || event.metaKey === true) &&
				(key === 65 || key === 67 || key === 86 || key === 88 || key === 90))
		);
	};

	const pre = "+98";
	
	const telHandler = (event) => {
		const target = event.target;
		const input = target.value.replace(pre, "").replace(/\D/g, "").substring(0, 10); // First ten digits of input only

		const zip = input.substring(0, 3);
		const middle = input.substring(3, 6);
		const beforeLast = input.substring(6, 8);
		const last = input.substring(8, 10);

		let inputValue = "";
		if (input.length > 8) {
			inputValue = `(${zip}) ${middle}-${beforeLast}-${last}`;
		} else if (input.length > 6) {
			inputValue = `(${zip}) ${middle}-${beforeLast}`;
		} else if (input.length > 3) {
			inputValue = `(${zip}) ${middle}`;
		} else if (input.length > 0) {
			inputValue = `(${zip}`;
		}

		setNumber(inputValue);
	};

	const enforceFormat = (event) => {
		// Input must be of a valid number format or a modifier key, and not longer than ten digits
		if (!isNumericInput(event) && !isModifierKey(event)) {
			event.preventDefault();
		}
	};

	const getCode = () => {
		const mobile = number.replace('(', '').replace(')', '').replace(' ', '').replaceAll('-', '');
		setMessage("");
		dispatch(getVerificationCode(mobile)).then(data => {
			if(!data){
				setMessage("Server Error.");
				return;
			}
			if(data.payload.msgFlag !== "0")
				setMessage(data.payload.msgText);
			else
				nextPage();
		}).catch(err => setMessage("Server error"));
	};
	
	return (
		<div className="text-center p-8" ref={ref}>
			<div className="text-lg font-bold">
				<FormattedMessage
					id="home.login.EnterNum"
					defaultMessage="Please enter your phone number"
				/>
			</div>
			<div
				className={classNames(
					"w-full inline-flex text-center my-0 mx-auto mt-8 relative",
					classes.inputContainer
				)}
			>
				<input
					onKeyDown={enforceFormat}
					type="tel"
					value={number ? pre + number : ''}
					onChange={(e) => telHandler(e)}
					className={classNames("w-full h-full border-none text-center",
						classes.input
					)}
				/>
				<div className={classNames(classes.phoneCode, number ? "hidden" : "")}>+98</div>
			</div>
			<button
				className={classNames(
					"w-full block my-0 mx-auto p-5 font-bold text-md",
					classes.btn,
					number && number.length === 15 ? "" : "cursor-not-allowed"
				)}
				onClick={getCode}
				disabled={number && number.length === 15 ? false : true}
			>
				<FormattedMessage
					id="home.loginConfirmSubmit.Next"
					defaultMessage="Next"
				/>
			</button>
			<div className="my-2">{message}</div>
			<div className={classNames("mt-3", classes.disclaimer)}>
				<FormattedMessage
					id="home.loginConfirmSubmit.AcceptCondition"
					defaultMessage="By clicking the 'Next' button, you accept the conditions"
				/>
				<br />
				<a className="underline" href="#link">
					<FormattedMessage
						id="home.loginConfirmSubmit.Agreement"
						defaultMessage="User agreement"
					/>
				</a>
			</div>
		</div>
	);
});

export default MobileLoginBody;
