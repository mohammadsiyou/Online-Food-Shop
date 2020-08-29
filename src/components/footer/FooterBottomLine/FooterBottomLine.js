import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import classNames from "classnames";
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
	copyRight: {
		color: "#b8b8b8",
	},
}));


const FooterBottomLine = () => {
	const classes = useStyles();
	const sociallink = useSelector(state => state.setting.sociallink);
	const footer = useSelector(state => state.setting.footer);

	return (
		<div className="px-3 py-5 flex justify-between flex-row-reverse md:px-32 md:py-10 md:flex-row">
			<div className={classNames(classes.copyRight, "md:text-lg text-sm")}>
				{footer}
			</div>
			<div className="flex flex-row">
				{sociallink.map((item, index) => (
					<a href={item.href} className="mx-1 md:mx-2" key={index}>
						<img src={item.src} alt={item.alt} className="h-5 md:h-8" />
					</a>
				))}
			</div>
		</div>
	);
};

export default FooterBottomLine;
