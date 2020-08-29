import React from "react";
import { Icon } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import { makeStyles } from '@material-ui/core/styles';
import FooterColumnTitle from "./FooterColumnTitle";
import FooterColumnList from "./FooterColumnList";
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
	mailIcon: {
		fontSize: "18px",
		paddingTop: " 0.2rem",
		marginRight: "5px",
	},
}));



const AboutCompany = (
	<FormattedMessage
		id="home.footerColumnInfo.AboutCompany"
		defaultMessage="About company"
	/>
);
const Feedback = (
	<FormattedMessage
		id="home.footerColumnInfo.Feedback"
		defaultMessage="Feedback"
	/>
);

const FooterColumnInfo = () => {
	const classes = useStyles();
	const footerMenu = useSelector(state => state.setting.footerMenu);
	const footerList = footerMenu.map(({menutitle}) => ({text:menutitle, link:''}));

	return (
		<div className="text-left md:text-right text-base">
			<FooterColumnTitle title={AboutCompany} />
			<ul>
				<FooterColumnList footerList={footerList} />
			</ul>
			<div className="mt-12">
				<a href="#mail">
					<Icon className={classes.mailIcon}>mail</Icon>
					{Feedback}
				</a>
			</div>
		</div>
	);
};

export default FooterColumnInfo;
