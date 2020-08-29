import React from "react";
import { useMediaQuery, Snackbar, IconButton, Icon } from "@material-ui/core";
import { useTheme } from '@material-ui/core/styles';
import classNames from "classnames";
import { FormattedMessage } from "react-intl";

import { useDispatch, useSelector } from "react-redux";
import { openDialog } from "store/dialog";

import MessageDialog from "./MessageDialog";

const MessageButton = ({ className }) => {
	const theme = useTheme();
	const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
	const dispatch = useDispatch();
	const detail = useSelector(state => state.profile.detail);
	const [open, setOpen] = React.useState(false);
	const handleOpen = event => setOpen(true);	
	const handleClose = event => setOpen(false);	
	
	const messageClick = () => {
			
		const { qualifications = [], categories = [], id } = detail;

		dispatch(openDialog({
			children: <MessageDialog qualifications={qualifications} categories={categories} id={id} triggerMessage={handleOpen} />,
			maxWidth: "md",
			fullWidth: true,
			scroll: "body",
			fullScreen: fullScreen,
		}));
	};

	return (
		<>
			<div
				className={classNames(
					"flex items-center justify-center font-bold text-lg w-auto h-10 mt-6 px-4 bg-blue-400 text-white rounded cursor-pointer",
					className
				)}
				onClick={messageClick}			
			>
				<FormattedMessage
					id="profile.messageButton.ContactRestaurant"
					defaultMessage="Contact This Restaurant"
				/>		
			</div>
			<Snackbar
				anchorOrigin={{vertical: 'top', horizontal: 'center'}}
				open={open}
				autoHideDuration={6000}
				onClose={handleClose}
				message={<FormattedMessage id="profile.comment.send.message" defaultMessage="Comment Sent."/>}			
				action={
					<IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
						<Icon>close</Icon>
					</IconButton>
				}
			/>			
		</>
	);
};

export default MessageButton;
