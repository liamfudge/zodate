import { REGISTERED_USER, LIKED_USERS, NAV } from '../Actions/Types';

const initialState = {
	registeredUser: 'empty',
	likedUsers: [],
	nav: 'home',
}

export default function(state = initialState, action) {
	switch(action.type) {
		case REGISTERED_USER:
			return {
				...state,
				registeredUser: action.payload
			}
		case LIKED_USERS:
			return {
				...state,
				likedUsers: action.payload
			}
		case NAV:
			return {
				...state,
				nav: action.payload
			}
		default:
			return state;
	}
}