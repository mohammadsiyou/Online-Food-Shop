import React from "react";
import { Hidden } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { useSelector } from 'react-redux';

import Map from "./Map";
import Qualifications from "./Qualifications";
import Verification from "./Verification";
import MessageButton from "../MessageButton";

const useStyles = makeStyles(() => ({
	root: {
		overflow: "hidden",
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
}));

const Sidebar = ({ className }) => {
	const classes = useStyles();
	const detail = useSelector(state => state.profile.detail);
	const { qualifications = [], vote = [], verification = {}, location = [34.33781482366286, 47.088752098083496] } = detail;
	
	return (
		<div className={classNames(classes.root, className)}>
			<Map className="mapWrapper" location={location} />
			<Hidden smDown>
				<MessageButton />
			</Hidden>
			<Qualifications list={qualifications} />
			<Verification list={vote} labels={verification} />
		</div>
	);
};

export default Sidebar;
