import React from "react";
import { makeStyles } from '@material-ui/core/styles';

import { useDispatch } from 'react-redux';
import { useRouteMatch } from 'react-router-dom';
import {getProfile} from 'store/profile';
import { getSetting } from "store/setting";

import Sidebar from "./sidebar/Sidebar";
import Content from "./content/Content";

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		flexDirection: "column",
		"& .sidebarWrapper": {
			width: "100%",
			padding: "0px",
			margin: "12px 0px",
			"& .mapWrapper": {
				border: "none",
			},
		},
		"& .contentWrapper": {
			width: "100%",
		},
		[theme.breakpoints.up("md")]: {
			flexDirection: "row",
			margin: "8px 0px",
			"& .sidebarWrapper": {
				width: "350px",
				padding: "0px 12px",
				margin: "0px",
			},
			"& .contentWrapper": {
				maxWidth: "calc(100% - 350px)",
			},
		},
	},
}));

const Profile = (props) => {
	const classes = useStyles();
	const match = useRouteMatch({path:'/:language/:city/profile/:profileName?'});
	const dispatch = useDispatch();
	
	const { language, city, profileName } = match.params;

	React.useEffect(() => {
		if(profileName)
			dispatch(getProfile(language, city, profileName));
	}, [dispatch, profileName, language, city]);
	
  	React.useEffect(() => {
		dispatch(getSetting("profile"));
	}, [dispatch]);		
		
	return (
		<div className={classes.root}>
			<Content className="contentWrapper" />
			<Sidebar className="sidebarWrapper" />
		</div>
	);
};
export default Profile;
