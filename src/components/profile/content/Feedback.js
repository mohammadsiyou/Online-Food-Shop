import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Rating from "@material-ui/lab/Rating";
import { FormattedMessage } from "react-intl";

import Card from "../Card";

const useStyles = makeStyles(() => ({
	root: {
		marginTop: "32px",
		"& .header > div > span": {
			color: "#63b3ed",
		},
		"& .content": {
			"& .item": {
				color: "#7b7a8c",
				borderBottom: "1px solid #ccc",
				padding: "20px 0px",
				marginTop: "8px",
				"& .title": {
					fontSize: "18px",
				},
				"& .date": {
					color: "#555",
					margin: "10px 0px",
				},
				"& .rate": {},
				"& .comment": {
					marginTop: "12px",
				},
			},
		},
	},
}));

const Feedback = ({list}) => {
	const classes = useStyles();

	const Header = () => (
		<div>
			<FormattedMessage
				id="profile.feedBack.FeedBackForRestaurant"
				defaultMessage="Feedback For Restaurant"
			/>
			(<span>{list.length}</span>)
		</div>
	);

	const Content = () => (
		<div>
			{list.map(({ sender, alt, date, rate, text }, index) => (
				<div className="item" key={index}>
					<div className="title">{alt || sender}</div>
					<div className="date">{date}</div>
					<Rating className="rate" value={rate} readOnly />
					<div className="comment">{text}</div>
				</div>
			))}
		</div>
	);

	return <Card Header={Header} Content={Content} className={classes.root} />;
};

export default Feedback;
