import axios from 'axios';

export const GET_PROFILE_DETAIL = "[PROFILE] GET_PROFILE_DETAIL";
export const GET_PROFILE_DETAIL_COMMENTS = "[PROFILE] GET_PROFILE_DETAIL_COMMENTS";
export const SEND_COMMENTS = "[PROFILE] SEND_COMMENTS";


export function getProfile(locale, city, name){     
	const request = axios.get(`/eda/v1/catering-Profile?cityLocation=${city}&SSIPD=5.63.13.165&lang=${locale}&cateringId=&cateringName=${name}`);

    return dispatch => 
        request.then((response) => {
			dispatch(getComments(locale, city, name));
            return dispatch({
                type   : GET_PROFILE_DETAIL,
                payload: response.data
            })
		});
}

export function getComments(locale, city, name){     
	const request = axios.get(`/eda/v1/catering-comments?cityLocation=${city}&SSIPD=5.63.13.165&lang=${locale}&cateringId=&cateringName=${name}`);

    return dispatch => 
        request.then((response) =>
            dispatch({
                type   : GET_PROFILE_DETAIL_COMMENTS,
                payload: response.data
            })
        );
}

export function sendComment(data)
{
    const request = axios.post('/eda/v1/catering-BookingRequest', data);

    return (dispatch) =>
        request.then((response) => { 
			return dispatch({
				type   : SEND_COMMENTS,
				payload: response.data
			})
		});
}