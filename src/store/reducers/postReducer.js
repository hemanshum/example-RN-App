import { GET_POSTS, POSTS_ERROR, SEARCH_POSTS, SET_LOADING } from '../types';

const initialState = {
	posts: null,
	loading: false,
	error: null,
};
export default (state = initialState, action) => {
	switch (action.type) {
		case GET_POSTS:
			return {
				...state,
				posts: action.payload,
				loading: false,
				error: null
			};
		case SEARCH_POSTS:
			return {
				...state,
				posts: action.payload,
				loading: false,
				error: null
			}
		case POSTS_ERROR:
			return {
				...state,
				error: action.payload,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		default:
			return state;
	}
};
