import * as Actions from './leftover.actions';

const initialState = {
	leftOverCategories: [],
	leftOverSubjects: [],
	leftOvers: [],
	leftOversFilters:{
		limit	: 10, 
		skip	: 0, 
		rate	: [0.1, 5], 
		price	: null, 
		subject	: '',
		seed	: 'Trust you',
	},
	searchText     		: '',
	leftOversTotalCount : 0,
};

const leftover = function (state = initialState, action) {
    switch ( action.type )
    {
		case Actions.GET_LEFTOVER_CATEGORIES: {
			return {
				...state,
				leftOverCategories: action.payload.data,
			}
		}	
		case Actions.GET_LEFTOVER_SUBJECTS: {
			return {
				...state,
				leftOverSubjects: action.payload.data,
			}
		}	
		case Actions.GET_LEFTOVERS: {
			return {
				...state,
				leftOvers: action.payload.data,
				leftOversTotalCount: action.payload.cnt,
			}
		}	
		case Actions.CHANGE_LEFOVER_FILTERS: {
			return {
				...state,
				leftOversFilters: {...state.leftOversFilters, ...action.payload},
			}
		}	
        case Actions.SET_SEARCH_TEXT:
        {
            return {
                ...state,
                searchText: action.payload
            };
        }		
        default:
        {
            return state;
        }
    }
};

export default leftover;
