import { GET_USER, USER_ERROR, SET_LOADING } from '../types';

//Get posts from server
export const getUser = (id) => async (dispatch) => {
    try {
        setLoading();

        const userRes = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const photoRes = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        const user = await userRes.json();
        const photo = await photoRes.json();

        dispatch({
            type: GET_USER,
            payload: { ...user, ...photo }
        })

    } catch (error) {
        dispatch({
            type: USER_ERROR,
            payload: error.response.data
        })
    }
}

//Set Loading to true
export const setLoading = () => {
    return {
        type: SET_LOADING
    }
}