import { GET_USER, USER_ERROR, SET_LOADING } from '../types';

const initialState = {
    user: null,
    loading: false,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_USER:
            return {
                ...state,
                user: action.payload,
                loading: false,
                error: null
            };
        case USER_ERROR:
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