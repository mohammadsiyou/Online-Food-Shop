import React from 'react';
import { Icon } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
	"@global":{
		".landingWrapper":{
			"maxWidth": "1300px",
			"margin": "-20px auto 0px auto"			
		},
		".app-image":{
			"backgroundImage": "url(/static/images/landing/mobile-app.jpg)",
			"backgroundPosition": "100% 0",
			"width": "78%",
			"backgroundSize": "cover",
			"backgroundRepeat": "no-repeat"
		},
		".app-qr":{
			"marginTop": "80px",
			"boxSizing": "border-box"			
		},
		".app-qr-code":{
			"height": "345px",
			"marginBottom": "20px",
			"background": "url(data:image/gif;base64,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) no-repeat",
			"backgroundPosition": "55%",	
		},
		".app-subtitle":{
			"fontSize": "1.5em",
		},
		".app-title":{
			"fontSize": "3.0em",
		},
		".app-links":{
			"display": "flex",
			"justifyContent": "space-between",
			"alignItems": "center",
			"marginBottom": "40px"			
		},
		".promo":{
			"color": "#383836",
		},
		".promo-divider":{
			"marginBottom": "130px"
		},
		".promo-title":{
			"fontSize": "2.6em",
			"fontWeight": "600",
			"marginBottom": "30px",
			"color": "#383836",
		},
		".promo-advices-video":{
			"backgroundImage": "url(/static/images/landing/iphone.png)",
			"minWidth": "300px",
			"backgroundSize": "contain",
			"backgroundRepeat": "no-repeat",
			"boxSizing": "border-box",
			"padding": "20px"
		},
		".promo-advices-video img":{
			"position": "relative",
			"width": "255px",
			"margin": "auto",
			"borderRadius": "20px",
			"zIndex": "-1"			
		},
		".promo-advices-list":{
			"marginTop": "30px",
			"width": "100%",
		},
		".promo-advice-image":{
			"minWidth": "80px",
			"width": "80px",
			"height": "80px",
			"backgroundSize": "cover"			
		},
		".promo-advice-icon":{
			"position": "relative",
			"height": "110px",
			"width": "120px",
			"textAlign": "center",
			"display": "flex",
			"justifyContent": "center"			
		},
		".promo-card":{
			"width": "calc(33.33333% - 20px)",
			"maxWidth": "340px"				
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
			"boxSizing": "border-box"			
		},
		".category-item": {
			"position": "absolute",			
			"zIndex": "1",			
		},
		".category-big": {	
			"fontSize": "24px",
			"width": "200px",
			"height": "200px",
			"boxShadow": "0 0 16px rgba(0,0,0,.25)",
			"borderRadius": "16px"		
		},
		".category-normal": {	
			"borderRadius": "12px",
			"width": "150px",
			"height": "150px",
			"boxShadow": "0 0 8px rgba(0,0,0,.25)"		
		},
		".category-small": {	
			"fontSize": "12px",
			"borderRadius": "8px",
			"width": "100px",
			"height": "100px",
			"boxShadow": "0 0 4px rgba(0,0,0,.25)",
			"boxSizing": "border-box"		
		},
		".parallax": {
			"transition": "0.6s transform ease-out",
			//"transform": "translate3d(var(--parallax-x), var(--parallax-y), 0px)"			
		},
	},
}));

const adviceImage1 = "data:image/jpeg;base64,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";
const adviceImage2 = "/static/images/landing/rafaello.jpg";
const adviceImage3 = "/static/images/landing/tomato.jpg";

const advices = [
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

const style1 = {"transform":"translate3d(19px, 20.75px, 0px)","bottom":"10%", "left":"0px"};
const style2 = {"transform":"translate3d(-11.78px, 4.15px, 0px)","top":"30%","left":"25%"};
const style3 = {"transform":"translate3d(-29.45px, 10.375px, 0px)","left":"35%","bottom":"15%"};
const style4 = {"transform":"translate3d(-16.8286px, 5.92857px, 0px)","left":"5%","top":"20%"};
const style5 = {"transform":"translate3d(-14.725px, 5.1875px, 0px)","left":"35%","top":"5%"};
const style6 = {"transform":"translate3d(-29.45px, 10.375px, 0px)","left":"50%","top":"30%"};
const style7 = {"transform":"translate3d(-5.89px, 2.075px, 0px)","right":"5%"};
const style8 = {"transform":"translate3d(-11.78px, 4.15px, 0px)","top":"2%","right":"25%"};
const style9 = {"transform":"translate3d(-14.725px, 5.1875px, 0px)","bottom":"10%","right":"30%"};
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


const Landing = () => {
	useStyles();
	
	React.useEffect(() => {
		
		const parallaxIt = function(e, parent, movement) { 
			const relX = e.pageX - offset(parent).left
			const relY = e.pageY - offset(parent).top
			const x = (relX - parent.offsetWidth / 2) / parent.offsetWidth * movement
			const y = (relY - parent.offsetHeight / 2) / parent.offsetHeight * movement
			return {x, y};
		}
		
		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop
			return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
		}
		
		const categoryWrapper = document.querySelector(".promo-categories");
		
		function onMouse(event){
			
			const {x, y} = parallaxIt(event, this, 80);
			
			const itemList = this.querySelectorAll(".category-item");
			itemList.forEach(item => {
				item.style.setProperty('transform', `translate3d(${x}px, ${y}px, 0px)`);
			});

		};
		
		categoryWrapper.addEventListener("mousemove", onMouse);
		
		return () => {
			categoryWrapper.removeEventListener("mousemove", onMouse);
		};
		
	},[]);
	
	return (
		<div className="landingWrapper">
			<div className="app flex">
				<div className="app-image"></div>
				<div className="app-qr">
					<h4 className="app-subtitle text-black"><FormattedMessage id="landing.app.subtitle" defaultMessage="Mobile App" /></h4>
					<h1 className="app-title text-black mb-5"><FormattedMessage id="landing.app.title" defaultMessage="My carousel" /></h1>
					<div className="app-qr-code" />
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
			<div className="promo">
				<div className="promo-divider" />
				<div className="promo">
					<div className="promo-title">
						<FormattedMessage id="landing.advices.title" defaultMessage="Personal offers are activated with one touch" />
					</div>
					<div className="promo-advices flex">
						<div className="promo-advices-video rtl:ml-20 ltr:mr-20">
							<img src="/static/images/landing/carousel.gif" alt="advices" />
						</div>
						<div className="promo-advices-list">
						{
							advices.map(({title, percent, time, description, image, icon}, index) =>
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
				<div className="promo-divider" />
				<div>
					<div className="promo-title">
						<FormattedMessage id="landing.cards.title" defaultMessage="The bonus card is always with you" />
					</div>
					<div className="promo-cards flex flex-wrap justify-between">
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
					</div>				
				</div>
				
				<div className="promo-divider" />
				
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
										<p className="mt-3">{name}</p>
									</div>
								</div>
							)
						}
					</div>				
				</div>
				
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

export default Landing;