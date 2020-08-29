import React from "react";
import { Divider, Slide } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

import MobileLoginHeader from "./MobileLoginHeader";
import MobileLoginBody from "./MobileLoginBody";
import MobileLoginCode from "./MobileLoginCode";

const useStyles = makeStyles((theme) => ({
	divid: {
		backgroundColor: "rgba(0, 0, 0, 0.05)",
	},
}));

const MobileLogin = (props) => {
	const classes = useStyles();
	const [page, setPage] = React.useState(1);

	const nextPage = () => setPage(2);
	const prevPage = () => setPage(1);
	
	return (
		<>
			<MobileLoginHeader page={page} prevPage={prevPage} />
			<Divider className={classes.divid} />
			<Slide direction="right" in={page === 1} timeout={{ enter:400, exit:0}} mountOnEnter unmountOnExit>
				<MobileLoginBody nextPage={nextPage} />
			</Slide>
			<Slide direction="left" in={page === 2} timeout={{ enter:400, exit:0}} mountOnEnter unmountOnExit>
				<MobileLoginCode/>
			</Slide>
		</>
	);
};
export default MobileLogin;
