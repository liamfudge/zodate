import { REGISTERED_USER, LIKED_USERS, NAV } from './Types';

export const registeredUser = (data) => dispatch => {
	dispatch({
		type: REGISTERED_USER,
		payload: data
	})
}
export const likedUsers = (data) => dispatch => {
	dispatch({
		type: LIKED_USERS,
		payload: data
	})
}
export const nav = (data) => dispatch => {
	dispatch({
		type: NAV,
		payload: data
	})
}