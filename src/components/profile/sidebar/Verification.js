import React from "react";
import { Icon } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Rating from "@material-ui/lab/Rating";
import { FormattedMessage } from "react-intl";

import Card from "../Card";

const useStyles = makeStyles(() => ({
	root: {
		marginTop: "32px",
		width: "100%",
		"& .content > div": {
			color: "#7e7d8f",
		},
	},
}));

const Verification = ({list, labels}) => {
	const classes = useStyles();

	const Header = () => (
		<FormattedMessage
			id="profile.verification.VerificationStatus"
			defaultMessage="Verification status"
		/>
	);

	const Content = () => (
		<div>
			<div className="flex items-center ">
				<Icon fontSize="large" className="ml-2 mr-4 text-green-400">
					verified_user
				</Icon>
				<div>
				{labels.verified}
				</div>
			</div>
			<div className="flex items-center my-6">
				<Icon fontSize="large" className="ml-2 mr-4 text-green-400">
					beenhere
				</Icon>
				<div>
					{labels.DBSverified}
				</div>
			</div>
			<div className="font-bold my-6">
				<FormattedMessage
					id="profile.verification.RateRestaurant"
					defaultMessage="How references rated Restaurant"
				/>
			</div>
			{
				list.map(({rate, title}, index) =>
					<div className="flex items-center my-4 " key={index}>
						<Rating className="rate" value={rate} readOnly />
						<span className="ml-4 uppercase">{title}</span>
					</div>				
				)
			}
		</div>
	);

	return <Card Header={Header} Content={Content} className={classes.root} />;
};
export default Verification;
