import React from "react";
import { Hidden } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { useSelector } from "react-redux";

import MessageButton from "../MessageButton";
import Specification from "./Specification";
import AboutMe from "./AboutMe";
import Availability from "./Availability";
import Photos from "./Photos";
import Feedback from "./Feedback";


const useStyles = makeStyles(() => ({
	root: {
		flex: "1 1 100%",
	},
}));

const Content = ({ className }) => {
	
	const classes = useStyles();
	const detail = useSelector(state => state.profile.detail);
	const comments = useSelector(state => state.profile.comments);
	const {
		name, imagesAdress, rate = 0, description, price, email, mobile, address, aboutme = "", availability = {}, photos = [], 
		socialNetwork = [], categories = [], labels = [], SnippetsPerson
	} = detail;
	const restaurant = {name, imagesAdress, rate, description, price, email, mobile, address, socialNetwork, categories, labels};
	
	React.useEffect(() => {
		if(!SnippetsPerson)
			return;		
		const script = document.createElement('script');
		script.type = 'application/ld+json';
		script.async = true;	
		script.innerHTML = SnippetsPerson;
		document.body.appendChild(script);
		
		return () => {
			document.body.removeChild(script);
		}
	}, [SnippetsPerson]);		
	
	
	return (
		<div className={classNames(classes.root, className)}>
			<div className="flex flex-1 flex-col md:mr-2">
				<Specification item={restaurant} className="card" />
				<Hidden mdUp>
					<MessageButton className="mx-3" />
				</Hidden>
				 <AboutMe content={aboutme} />
				 <Availability list={availability} />
				 <Photos list={photos} />
				 <Feedback list={comments} />
			</div>
		</div>
	);
};
export default Content;
