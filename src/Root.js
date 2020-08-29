import React from "react";
import { Route, Switch, Redirect, useRouteMatch, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { IntlProvider } from 'react-intl';
import messages from './translate';
import CircularProgress from '@material-ui/core/CircularProgress';

import Theme from './assert/Theme';
import Layout from "./Layout";

import Scrollbar from "assert/Scrollbar";
import BaseDialog from "assert/BaseDialog";
import BasePopover from "assert/BasePopover";
import BaseMenu from "assert/BaseMenu";

import { localeChange } from "store/locale";

const Header = React.lazy(() => import("components/header/Header"));
const Footer = React.lazy(() => import("components/footer/FooterRoot"));

const Loading = () => <CircularProgress className="absolute" size={100} style={{top:'50%', left:'50%'}} classes={{colorPrimary:'text-black'}}/>;

const Root = (props) => { 

	const history = useHistory();
	const match = useRouteMatch({path: '/:language/:city'});
	const dispatch = useDispatch();
	const languages = useSelector(state => state.locale.languages);
	
	let localeObject = languages.find(item => item.default === true);
	let {locale} = localeObject;
	
	if(match && match.params.language !== locale){
		const findLanguage = languages.find(item => item.locale === match.params.language);
		if(!findLanguage)
			return history.push(`/${locale}/${match.params.city}`);
		else{
			dispatch(localeChange(findLanguage));
			localeObject = findLanguage;
			locale = findLanguage.locale;
		}
	}

	return (
		<React.Suspense fallback={<Loading />}>
			<IntlProvider locale={locale} messages={messages[locale]}>
				<Theme direction={localeObject.direction}>
					<Scrollbar>
						<Header />		
						<Switch>
							<Route path={'/:language/:city?'}>
								<Layout />
							</Route>
							<Redirect to={`/${locale}/all-city`} />
						</Switch>				
						<Footer />	
					</Scrollbar>
					<BaseDialog />
					<BasePopover />	
					<BaseMenu/>
				</Theme>
			</IntlProvider>
		</React.Suspense>
	);
};

export default Root;