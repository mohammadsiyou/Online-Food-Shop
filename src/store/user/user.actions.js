import axios from 'axios';
import { setSession, logout } from 'assert/AuthService';

export const GET_ADDRESS = "[ADDRESS] GET_ADDRESS";
export const ADD_ADDRESS = "[ADDRESS] ADD_ADDRESS";
export const EDIT_ADDRESS = "[ADDRESS] EDIT_ADDRESS";
export const REMOVE_ADDRESS = "[ADDRESS] REMOVE_ADDRESS";
export const GET_VERIFICATION_CODE = "[LOGIN] GET_VERIFICATION_CODE";
export const SET_AUTHENTICATION = "[LOGIN] SET_AUTHENTICATION";
export const SET_LOGOUT = "[LOGIN] SET_LOGOUT";
export const GET_PROFILE = "[USER] GET_PROFILE";
export const SET_PROFILE = "[USER] SET_PROFILE";


export function getAddresses() {
	return { type: GET_ADDRESS };
}

export function addAddress(address) {
	return {
		type: ADD_ADDRESS,
		payload: address,
	};
}

export function editAddress(address) {
	return {
		type: EDIT_ADDRESS,
		payload: address,
	};
}

export function removeAddress(address) {
	return {
		type: REMOVE_ADDRESS,
		payload: address,
	};
}

export function getVerificationCode(mobile)
{
	const data = {
		ent_resend	: '1',
		ent_language: '1',
		ent_mobile	: mobile,
		ent_dev_id	: '1417417',
		ent_code	: '+98',
		
	};
	
	const request = axios.post('/webservice/getVerificationCode', data);
	return dispatch =>
		request.then((response) => { 
				return dispatch({
						type	 : GET_VERIFICATION_CODE,
						payload: response.data,
						mobile: mobile,
				})
			}
		);
}

export function setAuthentication(verifyCode)
{
	const data = {
		cityLocation	: '32.456456,56.6456456',
		SSIPD			: '5.63.13.165',
		lang			: 'fa',
		code			: '+98',
		email			: '',
		verifyCode		: verifyCode,
		
	};
	
	return (dispatch, getState) => {
		const state = getState();
		data["mobile"] = state.user.userInfo.phone;
		const request = axios.post('/api/auth/WPAAuthenticate', data);
			return request.then((response) => { 
				const result = response.data;
				if(result.data)
					setSession(result.data.access_token);
				else
					setSession(null);
				return dispatch({
					type	 : SET_AUTHENTICATION,
					payload: result
				})
			}).catch(err => {
			console.log("err");
			setSession(null);
		});
	};
}

export function userLogout() {
	logout();
	return { type: SET_LOGOUT };
}

export function getProfile()
{ 
	const request = axios.get('/eda/cart/profile?lang=fa');
		return dispatch => 	
			request.then(response => 
				dispatch({
					type	 : GET_PROFILE,
					payload: response.data
				})
			);
}

export function profileUpdate(data)
{ 
	const {tel : mobile, emailCheck : Push_email, smsCheck : Push_ads, email, name} = data;
	const data1 = {
		lang: 'en',
		code: '+98',
		name, 
		mobile,
		email,
		Push_ads : Push_ads ? 1 : 0,
		Push_email: Push_email ? 1 : 0,
	};
	
	const request = axios.put('/eda/cart/profileUpdate?' + new URLSearchParams(data1).toString());
		return dispatch => 	
			request.then(response => 
				dispatch({
					type	 : SET_PROFILE,
					payload: response.data
				})
			);
}


