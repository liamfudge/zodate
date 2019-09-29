import { REGISTERED_USER, LIKED_USERS, NAV, CURRENT_PROFILE } from '../Actions/Types';

const initialState = {
	registeredUser: 'empty',
	likedUsers: [],
	nav: 'home',
	currentProfile: 0,
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
		case CURRENT_PROFILE:
			return {
				...state,
				currentProfile: action.payload
			}
		default:
			return state;
	}
}