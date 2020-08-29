import React from "react";
import { Icon } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import Rating from "@material-ui/lab/Rating";
import { FormattedMessage } from "react-intl";
import { useSelector } from 'react-redux';
import { Link, useRouteMatch } from "react-router-dom";
import ReactHtmlParser from 'react-html-parser';

import Currency from 'assert/Currency';

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
		border: "1px solid #f2f2f2",
		padding: "8px !important",
		background: "white",
		[theme.breakpoints.down("sm")]: {
			flexWrap: "wrap",
			"& .imageItem": {
				flex: "1 0 100%",
			},
			"& .otherColumn": {
				flex: "1 1 50%",
				padding: "8px",
			},
		},
		"& .imageItem": {
			transition: "transform 0.1s linear",
			backgroundSize: "240px",
			backgroundImage: "url(/static/images/restaurants/fallback-pattern.svg)",
			backgroundColor: "#f5f5f5",
			backgroundPosition: "center",
		},
		"& .itemDescription": {
			color: "#b0b0b0",
			width: "100%",
			overflow: "hidden",
			fontSize: "15px",
			marginTop: "8px",
			lineHeight: "1.33",
			overflowWrap: "break-word",
		},
		"& .itemMoney": {
			marginTop: "8px",
			fontSize: "18px",
			color: "#75c18f",
			fontWeight: "bold",
		},
		"& .itemTags .tag": {
			background: "#e8e8e8",
			padding: "4px 8px",
			color: "#717070",
			borderRadius: "3px",
			marginRight: "8px",
		},
		"& .social": {
			"display":"flex",
			//display: "none",
			marginTop: "12px",
			paddingLeft: "8px",
			"& *": {
				marginRight: "20px",
			},
		},
	},
	itemTitle: {
		position: "relative",
		overflow: "hidden",
		fontSize: "20px",
		lineHeight: "1.2",
		fontWeight: "bold",
		whiteSpace: "nowrap",
		textOverflow: "ellipsis",
	},
	itemDetail: {
		padding: "7px 0 0",
		display: "flex",
		flexWrap: "nowrap",
		fontSize: "14px",
		alignItems: "center",
	},
	deliveryIcon: {
		width: "32px",
		height: "22px",
		display: "inline-block",
		backgroundSize: "100%",
		backgroundImage:
			"url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIyMiIgdmlld0JveD0iMCAwIDMyIDIyIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiNGRkUwMzMiIGQ9Ik00IDBoMTkuM2E0IDQgMCAwIDEgMy40NTcgMS45ODhsNC4wNzMgN2E0IDQgMCAwIDEgMCA0LjAyNGwtNC4wNzMgN0E0IDQgMCAwIDEgMjMuMyAyMkg0YTQgNCAwIDAgMS00LTRWNGE0IDQgMCAwIDEgNC00eiIvPjxnIHN0cm9rZT0iIzAwMCI+PHBhdGggc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgZD0iTTEyLjg1NyAxMC4xNDNjMCAuNzYtMS4xNDMgMS40NTUtMS4xNDMgMi41NDcgMCAuNjIuNDk5LjgxIDEuMTQzLjgxSDE0YzEuMTI2IDAgNi4wOC00LjU0MiA1LjE0Mi02Ljk5Ii8+PHBhdGggc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBkPSJNMjAuMTg5IDE0LjQxYTEuNzE0IDEuNzE0IDAgMSAxLTMuMTg5Ljg3NWMwLS4xODIuMTMyLS42MTcuMzMzLS43OTgiLz48cGF0aCBkPSJNMTcuMDE1IDUuMDA1YzIuNzc0LjAzNSA0LjgyNSA3LjQ4OSA0LjgyNSA5LjA4MSAwIC4yOTYtLjE4OC41NzQtLjU2My44MzUtLjY3Mi0uNjE0LS44NzMtLjUwOS0xLjE2Mi0uNTA5bS0zLjEuNjk0Yy0uMjgyLjQ2Mi0yLjgyNS4zOTMtMy4yNTIuMzk0bS0xLjA3Ny00Ljg5NWwtNC4yMzUtLjExOGEuNzM2LjczNiAwIDAgMS0uNzM3LS43MzZ2LS4xOTRjMC0uNDI1LjM5LTEuMTA2LjgxNC0xLjA4bDMuOTY5LjU1MWMuMzg4LjAyNS40NzcuMzguNDc3Ljc3IDAgLjQwNy4xMTkuODA3LS4yODguODA3eiIvPjxwYXRoIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZD0iTTcuNTI1IDEzLjcyOWMtLjA5MS4wNS0uMjEyLjE0NC0uMzYuMjgyLS4xNi4xNjItLjI0OC4yNTQtLjI2My4yNzZhMS42OCAxLjY4IDAgMCAwLS4zMy45OTkgMS43MTQgMS43MTQgMCAxIDAgMy40MjggMCIvPjxwYXRoIGQ9Ik04LjI4NiAxMC4xNDNDOC4yODYgMTEuMjg2IDYgMTEuNzkgNiAxMy43OThjMCAwIC40MjguMjkyLjk0Ni41Mm0zLjA2Ni45NzdjLjUzOC4xMjUgMS4wNjcuMjA1IDEuNTQyLjIwNWgzLjIwNU0xNy4wNDMgNUgxNSIvPjwvZz48L2c+PC9zdmc+)",
		backgroundPosition: "center",
	},
	badgeItem: {
		padding: "0 10px",
		fontSize: "13px",
		background: "rgb(255, 224, 51)",
		lineHeight: "22px",
		marginRight: "10px",
		borderRadius: "99px",
	},
	priceItem: {
		minWidth: "50px",
		lineHeight: "22px",
		paddingLeft: "22px",
		backgroundSize: "20px 20px",
		backgroundImage: "url(/static/images/restaurants/wallet.svg",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "left",
		backgroundPositionY: "1px",
	display:"none",
	},
	secondPriceItem: {
		color: "#b0b0b0",
	},
}));

const Specification = ({
	item: { name, description, imagesAdress, price, email, mobile, address, socialNetwork, rate, categories, labels },
	className,
}) => {
	const classes = useStyles();
	const match = useRouteMatch({path: '/:language/:city'}); 
	const currency = useSelector(state => state.currency.current);

	return (
		<div className={classNames(className, classes.root)}>
			<div className={classNames("h-40 rounded md:w-1/3 md:mr-4", "imageItem")}>
				<div
					className="w-full h-full bg-cover bg-no-repeat bg-center"
					style={{ backgroundImage: `url(${imagesAdress})` }}
				></div>
				<noscript>
					<img src={imagesAdress} alt={name} className="w-full h-full" />
				</noscript>
				<div className="social">
				{
					socialNetwork.map(({link, icon, alt}, index) =>
						<a href={link} key={index} ><img className="h-5 w-5 overflow-hidden" src={icon} alt={alt} /></a> 
					)
				}
				</div>
			</div>

			<div className="otherColumn flex flex-col md:w-2/3 md:mr-4">
				<div className={classes.itemTitle}>{name}</div>
				<div className={classes.itemDetail}>
					{
						labels.map(({type, title}, index) => 
							type === "icon" ?
								<div className="relative mr-2" key={index}>
									<div className={classes.deliveryIcon}></div>
								</div>
							:
								<div className={classes.badgeItem} key={index}>
									{title}
								</div>
						)
					}
					<div className={classes.priceItem}>
						<span className="text-black">₽₽</span>
						<span className={classes.secondPriceItem}>₽</span>
					</div>
				</div>
				<div className="itemDescription">{ReactHtmlParser(description || '')}</div>
				<div className="itemMoney"><Currency price={price} value={currency.value} decimal={currency.decimal}/>{currency.symbol}</div>
				<div className="itemTags flex mt-2">
				{
					categories.map(({value}, index) => <div className="tag uppercase" key={index}>{value}</div>)
				}
				</div>
			</div>

			<div className="otherColumn flex flex-col justify-around items-start md:w-1/3">
				<div className="">
					<Rating className="rate" value={rate} readOnly />
				</div>
				<div className="my-4">
					{
						email &&
							<div>
								<FormattedMessage
									id="home.userInfoInput.Email"
									defaultMessage="Email"
								/>
								: {email}
							</div>				
					}
					{
						mobile &&
						<div className="mt-2">
							<FormattedMessage
								id="home.userInfoInput.Phone"
								defaultMessage="Phone"
							/>
							: {mobile}
						</div>						
					}
					{
						address &&
						<div className="mt-2">
							<FormattedMessage id="header.Address" defaultMessage="Address" />: {address}
						</div>						
					}
				</div>
				<Link
					to={`${match.url}/restaurant`}
					className="restaurantBtn flex items-center justify-center font-bold w-40 h-10 bg-blue-400 text-white rounded cursor-pointer"
				>
					<Icon>restaurant_menu</Icon>
					<span className="ml-1 text-lg">
						<FormattedMessage
							id="leftOver.card.MenuList"
							defaultMessage="Menu list"
						/>
					</span>
				</Link>
			</div>
		</div>
	);
};

export default Specification;
