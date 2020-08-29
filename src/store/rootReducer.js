import { combineReducers } from 'redux';

import currencyReducer from './currency';
import localeReducer from './locale';
import dialogReducer from './dialog';
import restaurantReducer from './restaurant';
import cityReducer from './city';
import locationReducer from './location';
import popoverReducer from './popover';
import leftoverReducer from './leftover';
import userReducer from './user';
import timeReducer from "./time";
import menuReducer from "./menu";
import settingReducer from "./setting";
import profileReducer from "./profile";

export default combineReducers({
    currency	: currencyReducer,
    locale		: localeReducer,
    dialog		: dialogReducer,
    restaurant	: restaurantReducer,
    city		: cityReducer,
    location	: locationReducer,
    popover		: popoverReducer,
    leftover	: leftoverReducer,
    user		: userReducer,
	timeList	:timeReducer,
	menu		:menuReducer,
	setting		:settingReducer,
	profile		:profileReducer,
});
