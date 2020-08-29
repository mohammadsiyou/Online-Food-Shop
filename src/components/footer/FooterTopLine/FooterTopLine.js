import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { useSelector } from 'react-redux';

const btnList = [
	{
		src: "/static/images/footer/app-store.svg",
		link: "/#app-store",
		alt: "app-store",
	},
	{
		src: "/static/images/footer/google-play.svg",
		link: "/#google-play",
		alt: "google-play",
	},
];

const FooterTopLine = () => {
	const match = useRouteMatch({path: '/:language/:city'}); 
	const logos = useSelector(state => state.setting.logo);
	const logo = logos && logos.length && logos[0];

	return (
		<div className="flex flex-row justify-between px-5 py-4 md:px-12 md:py-5 md:mx-16 ">
			<div className="w-40 mt-2 md:mt-0 md:ml-4">
			{
				Boolean(logo) &&
					<Link to={match.url}>
						<img src={logo.src} alt={logo.alt} className="w-30 sm:w-40" />
					</Link>				
			}

			</div>
			<div className="w-32 flex justify-end flex-wrap sm:w-2/3 sm:flex-no-wrap">
				{btnList.map((btn, index) => (
					<a href={btn.link} key={index}>
						<img src={btn.src} alt={btn.alt} className="mr-5 mb-2 md:mb-0" />
					</a>
				))}
			</div>
		</div>
	);
};

export default FooterTopLine;
