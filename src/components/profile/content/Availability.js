import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from "react-intl";

import Card from "../Card";

const useStyles = makeStyles((theme) => ({
	root: {
		marginTop: "16px",
		"& .header": {
			fontSize: "24px",
			marginBottom: "16px",
		},
		"& .content": {
			"& .cardcontent": {
				padding: "0x",
				color: "#7e7d8f",
				overflow: "auto",
				[theme.breakpoints.up("md")]: {
					paddingTop: "20px",
					padding: "30px",
				},
			},
			"& table": {
				marginTop: "0",
				marginBottom: "1em",
			},
			"& .profileavailability": {
				width: "100%",
			},
			"& .availheader th": {
				textAlign: "center",
				color: "#626262",
				padding: "5px",
				borderTop: "1px solid #e7e6e6",
				lineHeight: "24px",
			},
			"& .availrow th": {
				textAlign: "left",
				color: "#626262",
				borderTop: "1px solid #eee",
				borderRight: "1px solid #eee",
				padding: "7px",
				paddingTop: "16px",
				paddingBottom: "11px",
			},
			"& .availcol": {
				textAlign: "left",
				color: "#626262",
				borderTop: "1px solid #eee",
				borderRight: "1px solid #eee",
				padding: "7px",
				paddingTop: "16px",
				paddingBottom: "11px",
			},
			"& .availrow td": {
				borderTop: "1px solid #f6f6f6",
				textAlign: "center",
			},
			"& .availrow td span.mobno": {
				display: "inline-block",
				[theme.breakpoints.down("sm")]: {
					display: "none",
				},
			},
			"& .mobyes": {
				display: "none",
				[theme.breakpoints.down("sm")]: {
					display: "inline-block",
				},
			},
		},
	},
}));

const Availability = ({list}) => {
	const classes = useStyles();

	const Header = () => (
		<FormattedMessage
			id="profile.availability.Availability"
			defaultMessage="Availability"
		/>
	);
	const Content = () => 
		<div className="cardcontent">
			<table className="profileavailability" cellSpacing="0">
				<tbody>
					<tr className="availheader">
						<th className="availcol">&nbsp;</th>
						{
							["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map((key, index) => <th key={index}>{key}</th>)
						}
					</tr>
					{
						Object.keys(list).map((key, index) => 
							<tr className="availrow" key={index}>
								<th>{key}</th>
								{
									list[key].split(',').slice(0, 7).map((child, childIndex) => 
										<td key={childIndex}>
											{
												child === "1" ? 
												<>
													<span className="mobno">
														<img src="/static/images/icons/avail-yes.png" alt="" />
													</span>
													<span className="mobyes">
														<img src="/static/images/icons/avail-yes-mob.png" alt="" />
													</span>
												</>
												:
												''
											}
										</td>								
									)
								}
							</tr>						
						)
					}
				</tbody>
			</table>
		</div>
	;

	return <Card Header={Header} Content={Content} className={classes.root} />;
};

export default Availability;
