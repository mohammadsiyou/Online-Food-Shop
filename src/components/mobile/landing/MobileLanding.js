import React from 'react';
import { Icon, Hidden } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { FormattedMessage } from "react-intl";
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const useStyles = makeStyles(() => ({
	"@global":{
		".landingWrapper":{
			'color': '#383836',		
		},
		".app": {
			"height": "740px",
			"position": "relative",
			"flexWrap": "wrap",
			"paddingBottom": "20px",
			"boxSizing": "border-box",
			"display": "flex",
			"flexFlow": "row"			
		},
		".app-image":{
			"position": "absolute",
			"top": "0",
			"bottom": "0",
			"left": "0",
			"right": "0",
			"width": "100%",
			"backgroundImage": "url(/static/images/landing/mobile-gb.jpg)",
			"backgroundPosition": "100% 0",
			"backgroundSize": "cover",
			"backgroundRepeat": "no-repeat"
		},
		".app-image-tablet":{
			"position": "absolute",
			"top": "0",
			"bottom": "0",
			"left": "0",
			"right": "0",
			"width": "100%",
			"backgroundImage": "url(/static/images/landing/mobile-app.jpg)",
			"backgroundPosition": "50%",
			"backgroundSize": "cover"			
		},
		".app-qr":{
			"position": "relative",
			"width": "100%",
			"padding": "0 20px",
			"marginTop": "4px",
			"boxSizing": "border-box"			
		},	
		".app-qr-tablet":{
			"position": "absolute",
			"bottom": "0",
			"left": "40px",
			"marginTop": "80px",
			"boxSizing": "border-box"			
		},		
		".app-subtitle":{
			"fontSize": "1.5em",
		},
		".app-title":{
			"fontSize": "3.0em",
		},
		".app-links":{
			"position": "absolute",
			"bottom": "0",
			"left": "15px",
			"right": "15px",
			"marginBottom": "0",
			"justifyContent": "space-around",
			"display": "flex",
			"alignItems": "center"		
		},				
		".app-links-tablet":{
			"display": "flex",
			"justifyContent": "space-between",
			"alignItems": "center",
			"marginBottom": "40px"	
		},				
		".promo":{
			"padding": "0 15px",
			"margin": "auto",
			"boxSizing": "border-box"
		},	
		".promo-divider":{
			"marginBottom": "80px"
		},		
		".promo-title":{
			"fontSize": "1.5em",
			"marginBottom": "30px",
		},
		".promo-advices-video":{
			"minWidth": "300px",
			"marginRight": "80px",
			"backgroundSize": "contain",
			"backgroundRepeat": "no-repeat",
			"boxSizing": "border-box",
			"padding": "20px"
		},
		".promo-advices-video-tablet": {
			"minWidth": "300px",
			"backgroundSize": "contain",
			"backgroundRepeat": "no-repeat",
			"boxSizing": "border-box",		
		},
		".promo-advice-image": {
			"minWidth": "80px",
			"width": "80px",
			"height": "80px",
			"backgroundSize": "cover"			
		},
		".promo-advices-video-full":{
			"position": "relative",
			"display": "flex",
			"justifyContent": "center",
			"alignItems": "center",
			"width": "calc(100% + 30px)",
			"padding": "0",
			"marginLeft": "-15px",
			"marginRight": "-15px"
		},
		".promo-advices-video img":{
			"position": "relative",
			"width": "255px",
			"margin": "auto",
			"borderRadius": "20px",
			"zIndex": "-1"	
		},
		".promo-advices-video-full img":{
			"width": "100%",
			"height": "100%"		
		},
		".promo-card":{
			"width": "100%",				
		},
		".promo-card-tablet":{
			"width": "100%",
			"maxWidth": "345px",
			"margin": "8px 4px",
		},
		".promo-advices":{
			"flexFlow": "row wrap",
			"justifyContent": "center"			
		},				
		".BrainhubCarousel__trackContainer ul":{
			"display": "flex",
			"alignItems": "flex-start",
		},				
		".promo-card-wrapper":{
			"width": "100%",
			"marginBottom": "20px",
			"opacity": "1",
			"overflow": "hidden",
			"borderRadius": "10px",
			"boxShadow": "0 4px 4px rgba(0,0,0,.25)",
			"transition": "opacity .3s linear"			
		},
		".promo-card-header":{
			"position": "relative",
			"color": "#fff",
			"padding": "10px 15px",
			"backgroundColor": "#383836",
			"display": "flex",
			"justifyContent": "space-between",
			"alignItems": "center"			
		},
		".promo-card-content":{
			"textAlign": "center",
			"padding": "15px"			
		},
		".promo-card-footer":{
			"fontSize": ".75em",
			"color": "#fff",
			"textAlign": "center",
			"display": "flex",
			"background": "linear-gradient(180deg,#008c58,#006640)"			
		},
		".promo-card-number":{
			"fontSize": "1.5em",
			"lineHeight": "54px",
			"display": "flex",
			"justifyContent": "space-between",
			"marginTop": "16px",
		},
		".promo-card-footer-item":{
			"display": "flex",
			"flexDirection": "column",
			"alignItems": "center",			
			"width": "33.33333%",
			"padding": "15px 20px"	
		},
		".promo-subtitle":{
			"lineHeight": "24px",
			"marginBottom": "24px",
			"fontsize": "20px",			
		},
		".promo-categories": {
			"position": "relative",
			"display": "block",
			"width": "100%",
			"minHeight": "240px"			
		},
		".promo-categories-tablet": {
			"position": "relative",
			"display": "block",
			"width": "100%",
			"minHeight": "665px"			
		},
		".promo-categories-bg": {
			"position": "absolute",
			"zIndex": "1",
			"top": "0",
			"left": "0",
			"right": "0",
			"bottom": "0",
			"display": "block",
			"background": "url(/static/images/landing/categories-bg.jpg) no-repeat",
			"backgroundSize": "cover",
			"width": "100%",
			"height": "100%",
			"filter": "blur(4px)"			
		},			
		".category": {
			"position": "relative",
			"display": "flex",
			"flexFlow": "column",
			"justifyContent": "center",
			"alignItems": "center",
			"textAlign": "center",
			"background": "#fff",
			"zIndex": "1",
			"boxSizing": "border-box",			
		},
		".category p": {
			"fontSize": "10px",
			"marginTop": "4px",
			"overflow": "hidden",
			"textOverflow": "ellipsis",
			"width": "100%",
		},
		".category-tablet": {
			"position": "relative",
			"display": "flex",
			"flexFlow": "column",
			"justifyContent": "center",
			"alignItems": "center",
			"textAlign": "center",
			"background": "#fff",
			"zIndex": "1",
			"boxSizing": "border-box"			
		},
		".category-item": {
			"position": "absolute",			
			"zIndex": "1",			
		},
		".category-big": {	
			"fontSize": "24px",
			"width": "80px",
			"height": "80px",
			"boxShadow": "0 0 16px rgba(0,0,0,.25)",
			"borderRadius": "16px"		
		},	
		".category-big img": {	
			"width": "32px",
			"height": "32px",
		},	
		".category-big-tablet": {	
			"fontSize": "24px",
			"width": "200px",
			"height": "200px",
			"boxShadow": "0 0 16px rgba(0,0,0,.25)",
			"borderRadius": "16px"		
		},
		".category-normal": {	
			"borderRadius": "12px",
			"width": "60px",
			"height": "60px",
			"boxShadow": "0 0 8px rgba(0,0,0,.25)"		
		},
		".category-normal img": {	
			"width": "24px",
			"height": "24px",
		},		
		".category-normal-tablet": {	
			"borderRadius": "12px",
			"width": "150px",
			"height": "150px",
			"boxShadow": "0 0 8px rgba(0,0,0,.25)"		
		},		
		".category-small": {	
			"fontSize": "12px",
			"borderRadius": "8px",
			"width": "40px",
			"height": "40px",
			"boxShadow": "0 0 4px rgba(0,0,0,.25)",
			"boxSizing": "border-box"		
		},
		".category-small img": {	
			"width": "16px",
			"height": "16px",
		},			
		".category-small-tablet": {	
			"fontSize": "12px",
			"borderRadius": "8px",
			"width": "100px",
			"height": "100px",
			"boxShadow": "0 0 4px rgba(0,0,0,.25)",
			"boxSizing": "border-box"		
		},
		".parallax": {
			"transition": "0.6s transform ease-out",	
		},		
	},
}));

const advices = [
	{
		id:1, 
		icon:'/static/images/landing/advice1-mobile.svg',
	},
	{
		id:2, 
		icon:'/static/images/landing/advice2.svg',
	},
	{
		id:3,
		icon:'/static/images/landing/advice3.svg',
	},
];

const adviceImage1 = "data:image/jpeg;base64,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";
const adviceImage2 = "/static/images/landing/rafaello.jpg";
const adviceImage3 = "/static/images/landing/tomato.jpg";

const tabletAdvices = [
	{
		id:1, 
		title:<FormattedMessage id="landing.advices1.title" defaultMessage="on mango" />, 
		percent:"30%", 
		time:<FormattedMessage id="landing.advices1.time" defaultMessage="until March 4" />, 
		description:<FormattedMessage id="landing.advices1.description" defaultMessage="Touch Activation Icon" />, 
		image:adviceImage1, 
		icon:'/static/images/landing/advice1.svg',
	},
	{
		id:2, 
		title:<FormattedMessage id="landing.advices2.title" defaultMessage="on Raffaello Chocolates in k ..." />, 
		percent:"50%", 
		time:<FormattedMessage id="landing.advices2.time" defaultMessage="until March 4" />,
		description:<FormattedMessage id="landing.advices2.description" defaultMessage="Wait 1-2 seconds for the coupon to activate" />, 	
		image:adviceImage2, 
		icon:'/static/images/landing/advice2.svg',
	},
	{
		id:3,
		title:<FormattedMessage id="landing.advices3.title" defaultMessage="on Tomatoes red sweet ..." />, 	
		percent:"50%", 
		time:<FormattedMessage id="landing.advices3.time" defaultMessage="until March 4" />,
		description:<FormattedMessage id="landing.advices3.description" defaultMessage="Buy at the maximum profit in Karusel hypermarkets" />, 	
		image:adviceImage3, 
		icon:'/static/images/landing/advice3.svg',
	},
];

const cards = [
	{
		id:1, 
		title:<FormattedMessage id="landing.card1.title" defaultMessage="There are 2400 points on my card" />, 
		description:<FormattedMessage id="landing.card1.description" defaultMessage="The actual number of points on your card." />
	},
	{
		id:2, 
		title:<FormattedMessage id="landing.card2.title" defaultMessage="There are 2400 points on my card" />, 
		description:<FormattedMessage id="landing.card2.description" defaultMessage="The actual number of points on your card." />
	},
	{
		id:3, 
		title:<FormattedMessage id="landing.card3.title" defaultMessage="There are 2400 points on my card" />, 
		description:<FormattedMessage id="landing.card3.description" defaultMessage="Go to your personal account, change your favorite category and see the purchase history." />
	},
];

const style1 = {"transform":"translate3d(0px, 20.75px, 0px)","bottom":"10%", "left":"0px"};
const tabletStyle1 = {"transform":"translate3d(19px, 20.75px, 0px)","bottom":"10%", "left":"0px"};
const style2 = {"transform":"translate3d(-11.78px, 4.15px, 0px)","top":"30%","left":"25%"};
const style3 = {"transform":"translate3d(-29.45px, 10.375px, 0px)","left":"35%","bottom":"15%"};
const style4 = {"transform":"translate3d(-16.8286px, 5.92857px, 0px)","left":"5%","top":"20%"};
const style5 = {"transform":"translate3d(-14.725px, 5.1875px, 0px)","left":"35%","top":"5%"};
const style6 = {"transform":"translate3d(-29.45px, 10.375px, 0px)","left":"50%","top":"30%"};
const style7 = {"transform":"translate3d(-5.89px, 2.075px, 0px)","right":"5%"};
const style8 = {"transform":"translate3d(-11.78px, 4.15px, 0px)","top":"2%","right":"25%"};
const style9 = {"transform":"translate3d(-14.725px, 14.1875px, 0px)","bottom":"10%","right":"30%"};
const tabletStyle9 = {"transform":"translate3d(-14.725px, 5.1875px, 0px)","bottom":"10%","right":"30%"};
const style10 = {"transform":"translate3d(-19.6333px, 6.91667px, 0px)","bottom":"40%","right":"10%"};
const style11 = {"transform":"translate3d(-19.6333px, 6.91667px, 0px)","bottom":"0px","right":"0px"};


const categories = [
	{id: 1, name: <FormattedMessage id="landing.categories.meat" defaultMessage="Meat and poultry" />, className: 'category category-big', style:style1, image: '/static/images/landing/meat.svg'},
	{id: 2, name: <FormattedMessage id="landing.categories.ball" defaultMessage="Goods for kids" />, className: 'category category-normal', style:style2, image: '/static/images/landing/ball.svg'},
	{id: 3, name: <FormattedMessage id="landing.categories.cleaning" defaultMessage="Products for cleaning and storage" />, className: 'category category-small', style:style3, image: '/static/images/landing/cleaning.svg'},
	{id: 4, name: <FormattedMessage id="landing.categories.food" defaultMessage="Own production" />, className: 'category category-small', style:style4, image: '/static/images/landing/food.svg'},
	{id: 5, name: <FormattedMessage id="landing.categories.drinks" defaultMessage="Drinks, Tea, Coffee" />, className: 'category category-small', style:style5, image: '/static/images/landing/drinks.svg'},
	{id: 6, name: <FormattedMessage id="landing.categories.freeze" defaultMessage="Frosts and convenience foods" />, className: 'category category-big', style:style6, image: '/static/images/landing/freeze.svg'},
	{id: 7, name: <FormattedMessage id="landing.categories.shopping" defaultMessage="health and beauty" />, className: 'category category-small', style:style7, image: '/static/images/landing/shopping.svg'},
	{id: 8, name: <FormattedMessage id="landing.categories.carrot" defaultMessage="Vegetables, fruits, greens, mushrooms" />, className: 'category category-normal', style:style8, image: '/static/images/landing/carrot.svg'},
	{id: 9, name: <FormattedMessage id="landing.categories.milk" defaultMessage="Dairy products, eggs" />, className: 'category category-normal', style:style9, image: '/static/images/landing/milk.svg'},
	{id: 10, name: <FormattedMessage id="landing.categories.zoogoods" defaultMessage="Pet supplies" />, className: 'category category-small', style:style10, image: '/static/images/landing/zoogoods.svg'},
	{id: 11, name: <FormattedMessage id="landing.categories.groats" defaultMessage="Groats, pasta, groceries" />, className: 'category category-big rtl:left-0 ltr:right-0', style:style11, image: '/static/images/landing/groats.svg'},
];

const tabletCategories = [
	{id: 1, name: <FormattedMessage id="landing.categories.meat" defaultMessage="Meat and poultry" />, className: 'category-tablet category-big-tablet', style:tabletStyle1, image: '/static/images/landing/meat.svg'},
	{id: 2, name: <FormattedMessage id="landing.categories.ball" defaultMessage="Goods for kids" />, className: 'category-tablet category-normal-tablet', style:style2, image: '/static/images/landing/ball.svg'},
	{id: 3, name: <FormattedMessage id="landing.categories.cleaning" defaultMessage="Products for cleaning and storage" />, className: 'category-tablet category-small-tablet', style:style3, image: '/static/images/landing/cleaning.svg'},
	{id: 4, name: <FormattedMessage id="landing.categories.food" defaultMessage="Own production" />, className: 'category-tablet category-small-tablet', style:style4, image: '/static/images/landing/food.svg'},
	{id: 5, name: <FormattedMessage id="landing.categories.drinks" defaultMessage="Drinks, Tea, Coffee" />, className: 'category-tablet category-small-tablet', style:style5, image: '/static/images/landing/drinks.svg'},
	{id: 6, name: <FormattedMessage id="landing.categories.freeze" defaultMessage="Frosts and convenience foods" />, className: 'category-tablet category-big-tablet', style:style6, image: '/static/images/landing/freeze.svg'},
	{id: 7, name: <FormattedMessage id="landing.categories.shopping" defaultMessage="health and beauty" />, className: 'category-tablet category-small-tablet', style:style7, image: '/static/images/landing/shopping.svg'},
	{id: 8, name: <FormattedMessage id="landing.categories.carrot" defaultMessage="Vegetables, fruits, greens, mushrooms" />, className: 'category-tablet category-normal-tablet', style:style8, image: '/static/images/landing/carrot.svg'},
	{id: 9, name: <FormattedMessage id="landing.categories.milk" defaultMessage="Dairy products, eggs" />, className: 'category-tablet category-normal-tablet', style:tabletStyle9, image: '/static/images/landing/milk.svg'},
	{id: 10, name: <FormattedMessage id="landing.categories.zoogoods" defaultMessage="Pet supplies" />, className: 'category-tablet category-small-tablet', style:style10, image: '/static/images/landing/zoogoods.svg'},
	{id: 11, name: <FormattedMessage id="landing.categories.groats" defaultMessage="Groats, pasta, groceries" />, className: 'category-tablet category-big-tablet rtl:left-0 ltr:right-0', style:style11, image: '/static/images/landing/groats.svg'},
];

const MobileLanding = () => {
	useStyles();
	
	
	return (
		<div className="landingWrapper">
			<Hidden smUp>
				<div className="app flex">
					<div className="app-image"></div>
					<div className="app-qr">
						<h4 className="app-subtitle text-black"><FormattedMessage id="landing.app.subtitle" defaultMessage="Mobile App" /></h4>
						<h1 className="app-title text-black mb-5"><FormattedMessage id="landing.app.title" defaultMessage="My carousel" /></h1>
						<div className="app-links">
							<a href="/#app-store">
								<img src="/static/images/footer/app-store.svg" alt="app-store" />
							</a>
							<a href="/#google-play">
								<img src="/static/images/footer/google-play.svg" alt="google-play" />
							</a>
						</div>
					</div>
				</div>
			</Hidden>
			<Hidden xsDown>
				<div className="app flex">
					<div className="app-image-tablet"></div>
					<div className="app-qr-tablet">
						<h4 className="app-subtitle text-black"><FormattedMessage id="landing.app.subtitle" defaultMessage="Mobile App" /></h4>
						<h1 className="app-title text-black mb-5"><FormattedMessage id="landing.app.title" defaultMessage="My carousel" /></h1>
						<div className="app-links-tablet">
							<a href="/#app-store">
								<img src="/static/images/footer/app-store.svg" alt="app-store" />
							</a>
							<a href="/#google-play">
								<img src="/static/images/footer/google-play.svg" alt="google-play" />
							</a>
						</div>
					</div>
				</div>
			</Hidden>			
			<div className="promo">
			
				<div className="promo-divider" />
				
				<Hidden smUp>
					<div>
						<div className="promo-title">
							<FormattedMessage id="landing.advices.title" defaultMessage="Personal offers are activated with one touch" />
						</div>					
						<div className="promo-advices flex flex-col">
							<div className="promo-advices-video promo-advices-video-full">
								<img src="/static/images/landing/carousel.gif" alt="advices" />
							</div>
							<p className="my-4">
								<FormattedMessage id="landing.card.video" defaultMessage="To get a discount, simply tap the activation icon" />
							</p>
							<div className="flex justify-around">
							{
								advices.map(({ icon}, index) =>
									<div key={index}>
										<img className="w-16 h-16" src={icon} alt="advices" />
									</div>					
								)
							}						
							</div>
						</div>					
					</div>
				</Hidden>
				
				<Hidden xsDown>
					<div>
						<div className="promo-title">
							<FormattedMessage id="landing.advices.title" defaultMessage="Personal offers are activated with one touch" />
						</div>					
						<div className="promo-advices flex">
							<div className="promo-advices-video-tablet">
								<img src="/static/images/landing/carousel.gif" alt="advices" />
							</div>
							<div className="promo-advices-list w-full mt-6">
							{
								tabletAdvices.map(({title, percent, time, description, image, icon}, index) =>
									<div className="mb-16" key={index}>
										<div className="flex">
											<div className="flex">
												<div className="promo-advice-image rtl:ml-10 ltr:mr-10" style={{backgroundImage:`url(${image})`}} />
												<div className="mb-8">
													<div className="mb-5 text-2xl">
														<b className="font-semibold">{percent}</b> {title}
													</div>
													<time className="block text-green-500">{time}</time>
												</div>
											</div>
											<div className="promo-advice-icon rtl:mr-auto ltr:ml-auto">
												<img src={icon} alt="advices" />
											</div>
										</div>
										<div>{description}</div>
									</div>						
								)
							}
							</div>
						</div>
					</div>		
				</Hidden>
				

				<div className="promo-divider" />
				
				<Hidden smUp>	
					<div>
						<div className="promo-title">
							<FormattedMessage id="landing.cards.title" defaultMessage="The bonus card is always with you" />
						</div>
						<div className="promo-cards flex flex-wrap justify-center">
							<Carousel dots draggable={false} rtl>
							{
								cards.map(({title, description}, index) =>
									<div className="promo-card" key={index}>
										<div className="promo-card-wrapper">
											<div className="promo-card-header">
												<div>{title}</div>
												<Icon className="cursor-pointer">info</Icon>
											</div>
											<div className="promo-card-content">
												<img src="/static/images/landing/code.svg" alt="code"/>
												<div className="promo-card-number">
													<div>1234</div>
													<div>5678</div>
													<div>9102</div>
													<div>3456</div>							
												</div>
											</div>
											<div className="promo-card-footer">
												<div className="promo-card-footer-item">
													<img src="/static/images/landing/user.svg" alt="user"/>
													<span className="leading-tight mt-1"><FormattedMessage id="landing.card.user" defaultMessage="Personal Area" /></span>
												</div>
												<div className="promo-card-footer-item">
													<img src="/static/images/landing/whishlist.svg" alt="whishlist"/>
													<span className="leading-tight mt-1"><FormattedMessage id="landing.card.wish" defaultMessage="Favorite Category" /></span>
												</div>
												<div className="promo-card-footer-item">
													<img src="/static/images/landing/history.svg" alt="history"/>
													<span className="leading-tight mt-1"><FormattedMessage id="landing.card.history" defaultMessage="Purchase history" /></span>
												</div>
											</div>
										</div>
										<p>{description}</p>					
									</div>				
								)
							}
							</Carousel>					
						</div>
					</div>
				</Hidden>
				
				<Hidden xsDown>
					<div>
						<div className="promo-title">
							<FormattedMessage id="landing.cards.title" defaultMessage="The bonus card is always with you" />
						</div>
						<div className="promo-cards flex flex-wrap justify-center">
							{
								cards.map(({title, description}, index) =>
									<div className="promo-card-tablet" key={index}>
										<div className="promo-card-wrapper">
											<div className="promo-card-header">
												<div>{title}</div>
												<Icon className="cursor-pointer">info</Icon>
											</div>
											<div className="promo-card-content">
												<img src="/static/images/landing/code.svg" alt="code"/>
												<div className="promo-card-number">
													<div>1234</div>
													<div>5678</div>
													<div>9102</div>
													<div>3456</div>							
												</div>
											</div>
											<div className="promo-card-footer">
												<div className="promo-card-footer-item">
													<img src="/static/images/landing/user.svg" alt="user"/>
													<span className="leading-tight mt-1"><FormattedMessage id="landing.card.user" defaultMessage="Personal Area" /></span>
												</div>
												<div className="promo-card-footer-item">
													<img src="/static/images/landing/whishlist.svg" alt="whishlist"/>
													<span className="leading-tight mt-1"><FormattedMessage id="landing.card.wish" defaultMessage="Favorite Category" /></span>
												</div>
												<div className="promo-card-footer-item">
													<img src="/static/images/landing/history.svg" alt="history"/>
													<span className="leading-tight mt-1"><FormattedMessage id="landing.card.history" defaultMessage="Purchase history" /></span>
												</div>
											</div>
										</div>
										<p>{description}</p>					
									</div>				
								)
							}						
						</div>					
					</div>
				</Hidden>
				
				<div className="promo-divider" />
				
				<Hidden smUp>				
					<div>
						<div className="promo-title">
							<FormattedMessage id="landing.categories.title" defaultMessage="5 times more points for choosing your favorite category" />
						</div>
						<div className="promo-subtitle">
							<FormattedMessage id="landing.categories.subtitle" defaultMessage="Choose your favorite category and get 5 times more points. You can change the category once a month." />
						</div>
						<div className="promo-categories">
							<div className="promo-categories-bg" />
							{
								categories.map(({name, image, className, style}, index) =>						
									<div className="category-item parallax" key={index} style={style}>
										<div className={className}>
											<div>
												<img src={image} alt={name} />
											</div>
											<p>{name}</p>
										</div>
									</div>
								)
							}
						</div>					
					</div>
				</Hidden>

				<Hidden xsDown>				
					<div>
						<div className="promo-title">
							<FormattedMessage id="landing.categories.title" defaultMessage="5 times more points for choosing your favorite category" />
						</div>
						<div className="promo-subtitle">
							<FormattedMessage id="landing.categories.subtitle" defaultMessage="Choose your favorite category and get 5 times more points. You can change the category once a month." />
						</div>
						<div className="promo-categories-tablet">
							<div className="promo-categories-bg" />
							{
								tabletCategories.map(({name, image, className, style}, index) =>						
									<div className="category-item parallax" key={index} style={style}>
										<div className={className}>
											<div>
												<img src={image} alt={name} />
											</div>
											<p>{name}</p>
										</div>
									</div>
								)
							}
						</div>					
					</div>
				</Hidden>
				
				<div className="promo-divider" />	
				
				<div>
					<div className="promo-title">
						<FormattedMessage id="landing.track.title" defaultMessage="Track your purchases and accumulated points" />
					</div>
					<div className="promo-track">
						<div className="promo-subtitle">
							<FormattedMessage id="landing.track.subtitle" defaultMessage="You can see the detailed history of purchases for all the time, as well as find out the number of points accrued from each purchase." />
						</div>
						<img className="w-full" src="/static/images/landing/history-mobile-app.jpg" alt="history-mobile-app" />
					</div>				
				</div>
				
				<div className="promo-divider" />

				<div>
					<div className="promo-title">
						<FormattedMessage id="landing.phoneCard.title" defaultMessage="Register a plastic card or create a virtual one" />
					</div>
					<div className="promo-phone-card">
						<div className="promo-subtitle">
							<FormattedMessage id="landing.phoneCard.subtitle" defaultMessage="You no longer need to fill out paper forms and wait for activation. Just enter your plastic card number when registering. Or create a virtual card." />
						</div>
						<img className="w-full" src="/static/images/landing/phone-and-card.jpg" alt="history-mobile-app" />
					</div>				
				</div>
				
				<div className="promo-divider" />				
				
			</div>
		</div>
	);	
};

export default MobileLanding;