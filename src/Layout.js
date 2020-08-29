import React, { Fragment } from "react";
import { makeStyles, Hidden } from "@material-ui/core/";
import { Route, Switch, Redirect, useRouteMatch  } from "react-router-dom";

const Pay = React.lazy(() => import("./components/pay/Pay"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const Profile = React.lazy(() => import("./components/profile/Profile"));

//desktop mode
const Home = React.lazy(() => import("./components/home/Home"));
const Landing = React.lazy(() => import("./components/landing/Landing"));
const DesktopRestaurant = React.lazy(() => import("./components/restaurant/DesktopRestaurant"));
const Checkout = React.lazy(() => import("./components/checkout/Checkout"));
const Leftover = React.lazy(() => import("./components/leftover/Leftover"));

//mobile mode
const MobileHome = React.lazy(() => import("./components/mobile/home/MobileHome"));
const MobileLanding = React.lazy(() => import("./components/mobile/landing/MobileLanding"));
const MobileRestaurant = React.lazy(() => import("./components/mobile/restaurant/MobileRestaurant"));
const MobileRestaurantSearch = React.lazy(() => import("./components/mobile/restaurant/MobileRestaurantSearch"));
const MobileCart = React.lazy(() => import("./components/mobile/cart/MobileCart"));
const MobileCheckout = React.lazy(() => import("./components/mobile/checkout/MobileCheckout"));
const MobilePay = React.lazy(() => import("./components/mobile/pay/MobilePay"));
const MobileLeftover = React.lazy(() => import("./components/mobile/leftover/MobileLeftover"));

const useStyles = makeStyles(() => ({
	defaultLayout: {
		width: "100%",
		maxWidth: 1400,
		marginBottom: 8,
		margin:'12px auto',
	},
}));

const Layout = (props) => { 

	const classes = useStyles();	
	const {path} = useRouteMatch();

	return (
		<Fragment>
		
			<Hidden smDown>			
				<div className={classes.defaultLayout}>
					<Switch>
						<Route exact path={`${path}/`} render={props => <Landing {...props} />} />
						<Route path={`${path}/main`} render={props => <Home {...props} />} />
						<Route path={`${path}/restaurant`} render={props => <DesktopRestaurant {...props} />} />
						<Route path={`${path}/leftover/:category?`} render={props => <Leftover {...props} />} />
						<Route path={`${path}/checkout`} render={props => <Checkout {...props} />} />
						<Route path={`${path}/pay`} render={props => <Pay {...props} />} />
						<Route path={`${path}/profile`} render={props => <Profile {...props} />} />
						<Route path={`${path}/contact`} render={props => <Contact {...props} />} />
						<Route path={`${path}/:city?/:category?`} render={props => <Home {...props} />} />
						<Redirect to="/" />
					</Switch>						
				</div>							
			</Hidden>
			
			<Hidden mdUp>
				<Switch>
					<Route exact path={`${path}/`} render={props => <MobileLanding {...props} />} />			
					<Route path={`${path}/main`} render={props => <MobileHome {...props} />} />			
					<Route path={`${path}/restaurant/search`} render={props => <MobileRestaurantSearch {...props} />} />		
					<Route path={`${path}/restaurant`} render={props => <MobileRestaurant {...props} />} />	
					<Route path={`${path}/profile`} render={props => <Profile {...props} />} />
					<Route path={`${path}/cart`} render={props => <MobileCart {...props} />} />
					<Route path={`${path}/checkout`} render={props => <MobileCheckout {...props} />} />
					<Route path={`${path}/pay`} render={props => <MobilePay {...props} />} />
					<Route path={`${path}/contact`} render={props => <Contact {...props} />} />
					<Route path={`${path}/leftover`} render={props => <MobileLeftover {...props} />} />	
					<Redirect to="/" />
				</Switch>					
			</Hidden>

		</Fragment>
	);
};

export default Layout;