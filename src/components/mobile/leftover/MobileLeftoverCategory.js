import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";

import { connect } from "react-redux";
import { NavLink, useRouteMatch } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	filtersList: {
		flex: "0 0 80px",
		height: "100px",
		display: "flex",
		textAlign: "center",
		marginLeft: "5px",
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "center",
	},
	root: {
	marginTop: "20px",
		borderTop: "1px solid rgba(0,0,0,.05)",
		borderBottom: "8px solid #fafafa",
	},
	scroll: {
		borderRadius: "8px",
		scrollBehavior: "smooth",
		[theme.breakpoints.down("sm")]: {
			overflow: "scroll",
			scrollSnapType: "x mandatory",
			display: "flex",
			WebkitOverflowScrolling: "touch",
			position: "relative",
			zIndex: "1",
		},
	},
	sliderWrapper: {
		position: "relative",
		[theme.breakpoints.down("sm")]: {
			overflowX: "hidden",
		},
	},
	bgListImage: {
		width: "76px",
		height: "76px",
		backgroundSize: "240px",
		backgroundImage:
			"url(/static/images/categories/fallback-pattern-9d2103a870e23618a16bcf4f8b5efa54.svg)",
		backgroundColor: "#f5f5f5",
		backgroundPosition: "center",
	},
	listImage: {
		backgroundSize: "contain",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		width: "100%",
		height: "100%",
	},
	listLink: {
		color: "#000000",
		margin: "0 -10px",
		display: "inline-block",
		padding: "4px 9px",
		zIndex: "1",
		position: "relative",
		fontSize: "13px",
		textAlign: "center",
		whiteSpace: "nowrap",
		borderRadius: "12px",
		textDecoration: "none",
	},
}));

const MobileLeftoverCategory = ({ className, categorise }) => {
	const classes = useStyles();
	const match = useRouteMatch({path:'/:language/:city'});
	const {language, city} = match.params;

	return (
		<div className={classes.root}>
			<div className={classes.sliderWrapper}>
				<div>
					<div
						className={classNames(
							"flex flex-row flex-no-wrap",
							classes.scroll
						)}
					>
						<ul className="flex">
							{categorise.map(({ name, id, imageSrc, slug }, index) => (
								<li className={classes.filtersList} key={index}>
									<NavLink className={classes.listLink} to={`/${language}/${city}/leftover/1/${slug}`}>
										<div className={classes.bgListImage}>
											<div className={classes.listImage}>
												<img src={imageSrc} alt={name} />
											</div>
										</div>
									</NavLink>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => ({
	categorise: state.leftover.leftOverCategories,
});


export default connect(mapStateToProps)(MobileLeftoverCategory);