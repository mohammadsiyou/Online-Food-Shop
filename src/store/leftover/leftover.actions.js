import axios from 'axios';

export const GET_LEFTOVER_CATEGORIES = "[LEFTOVER] GET_LEFTOVER_CATEGORIES";
export const GET_LEFTOVER_SUBJECTS = "[LEFTOVER] GET_LEFTOVER_SUBJECTS";
export const GET_LEFTOVERS = "[LEFTOVER] GET_LEFTOVERS";
export const CHANGE_LEFOVER_FILTERS = "[LEFTOVER] CHANGE_LEFOVER_FILTERS";
export const SET_SEARCH_TEXT = '[LEFTOVER] SET_SEARCH_TEXT';



export function getLeftOverCategories(locale, city){     
	const request = axios.get(`/eda/v1/catering-Category?cityLocation=${city}&SSIPD=5.63.13.165&lang=${locale}&limit=100&skip=0`);
	//console.log(`getLeftOverCategories`);
    return dispatch => 
        request.then((response) =>
            dispatch({
                type   : GET_LEFTOVER_CATEGORIES,
                payload: response.data
            })
        );
}
export function getLeftOverSubjects(locale, city, limit=100, skip=0){
    const request = axios.get(`/eda/v1/catering-subject?cityLocation=${city}&SSIPD=5.63.13.165&lang=${locale}&limit=${limit}&skip=${skip}`);
	//console.log(`getLeftOverSubjects`);
    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_LEFTOVER_SUBJECTS,
                payload: response.data
            })
        );
}
export function getLeftOvers(locale, city, data={}){
	const {limit=10, skip=0, rate=[0.1, 5], price=[10, 50000], subject='',category='', searchtxt='', seed=''} = data;
    const request = axios.get(
		`/eda/v1/catering-list?cityLocation=${city}&SSIPD=5.63.13.165&lang=${locale}&limit=${limit}&skip=${skip * limit}&rate=${rate[0]},${rate[1]}&price=${price[0]},${price[1]}&subject=${subject}&category=${category}&searchtxt=${searchtxt}&seed=${seed}`
	);
	//console.log(`getLeftOvers`);	
    return (dispatch) =>
        request.then((response) =>
            dispatch({
                type   : GET_LEFTOVERS,
                payload: response.data
            })
        );
}
export function changeLeftOverFilters(item) {
  return {
    type: CHANGE_LEFOVER_FILTERS,
    payload: item,
  };
}

export function setSearchText(event)
{
    return {
        type	: SET_SEARCH_TEXT,
        payload	: event.target.value.toLowerCase()
    }
}

