import { GET_POSTS, POSTS_ERROR, SEARCH_POSTS, SET_LOADING } from '../types';

//Get posts from server
export const getPosts = () => async (dispatch) => {
	try {
		setLoading();

		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		const data = await res.json();

		dispatch({
			type: GET_POSTS,
			payload: data,
		});
	} catch (error) {
		dispatch({
			type: POSTS_ERROR,
			payload: error.response.data,
		});
	}
};

//Search posts from server
export const newSearch = (text) => async (dispatch) => {
	try {
		setLoading();
		const res = await fetch(
			`http://jsonplaceholder.typicode.com/posts?q=${text}`
		);
		const data = await res.json();
		if (data.length === 0) {
			throw new Error
		} else {
			dispatch({
				type: SEARCH_POSTS,
				payload: data,
			});
		}
	} catch (error) {
		dispatch({
			type: POSTS_ERROR,
			payload: `"${text}" not found`,
		});
	}
};

//Set Loading to true
export const setLoading = () => {
	return {
		type: SET_LOADING,
	};
};
