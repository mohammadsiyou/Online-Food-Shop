import * as Actions from "./user.actions";

const addressList = [
	{
		id: "1",
		description: "Комсомольская площадь, 6",
		lat: 34.3419116,
		lng: 47.0879999,
	},
	{
		id: "2",
		description: "Котельническая набережная, 1/15",
		lat: 34.3419116,
		lng: 47.0879999,
	},
];
const orderList = [
	{
		id: "1",
		date: "10 Апреля 2020, 10:36",
		restaurant: "Moo Moo Burgers",
		totalPrice: 150,
		itemName: "Хачапури Мегрули",
		itemQuantity: "1",
		itemPrice: "20",
		optionItemName: "Облепиха-Малина",
		optionItemQuantity: 20,
	},
	{
		id: "2",
		date: "120 Апреля 2020, 10:36",
		restaurant: "Moo Moo Burgers",
		totalPrice: 1250,
		itemName: "Хачапури Мегрули",
		itemQuantity: "158",
		itemPrice: "258",
		optionItemName: "Подсолнечное",
		optionItemQuantity: 10,
	},
];
const userInfo = {
	id			: "",
	name		: "",
	Email		: "",
	phone		: "",
	birthDay	: "",
	access_token: "",
	emailCheck	: true,
	smsCheck	: false,
};

const initialState = {
	addressList,
	orderList,
	userInfo,
};

const userReducer = function (state = initialState, action) {
	switch (action.type) {
		case Actions.ADD_ADDRESS: {
			return {
				...state,
				addressList: [action.payload, ...state.addressList],
			};
		}
		case Actions.EDIT_ADDRESS: {
			return editAddress(state, action.payload);
		}
		case Actions.REMOVE_ADDRESS: {
			return removeAddress(state, action.payload);
		}
		case Actions.GET_VERIFICATION_CODE: {
			return {
				...state,
				userInfo: {...userInfo, phone:action.mobile},
			};
		}
		case Actions.SET_AUTHENTICATION: {
			return getUserInfo(state, action.payload);
		}
		case Actions.GET_PROFILE: {
			return getUserInfoByToken(state, action.payload);
		}
		case Actions.SET_PROFILE: {
			return getUserInfoByToken(state, action.payload);
		}
		case Actions.SET_LOGOUT: {
			return {
				...state,
				userInfo,
			}
		}
		default: {
			return state;
		}
	}
};

const getUserInfoData = result => {
	const {id, mobile:phone, data:{displayName:name = "", email:Email = "" }, Push_email = "1", Push_ads = "0"} = result;
	return {
		id,
		phone,
		name,
		Email,
		birthDay:'',
		Push_email : Push_email === "1" ? true : false,
		Push_ads : Push_ads === "1" ? true : false,
	};	
};

const getUserInfoByToken = (state, result) => {
	if(result.msgFlag !== "0")
		return state;	
	const userInfoData = getUserInfoData(result.data[0]);
	return {
		...state, 
		userInfo:userInfoData,
	};
};

const getUserInfo = (state, result) => { 
	if(result.msgFlag !== "0")
		return {...state, userInfo};
	const userInfoData = getUserInfoData(result.data);	
	return {
		...state, 
		userInfo:userInfoData,
	};
};

const editAddress = (state, address) => {
	const addressList = state.addressList;
	const addressIndex = addressList.findIndex((item) => item.id === address.id);

	const newAddressList =
		addressIndex > -1
			? [
					...addressList.slice(0, addressIndex),
					address,
					...addressList.slice(addressIndex + 1),
				]
			: addressList;

	return {
		...state,
		addressList: newAddressList,
	};
};

const removeAddress = (state, address) => {
	const addressList = state.addressList;

	return {
		...state,
		addressList: addressList.filter((item) => item.id !== address.id),
	};
};

export default userReducer;
