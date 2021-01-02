import {
    AUTH_USER,
    AUTH_START,
    AUTH_FINISHED,
    CLEAN_AUTH_ERROR,
} from '../actions/types';

const INITIAL_STATE = {
    user: [],
    isAuth: false,
    error: null,
    loading: false,
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case AUTH_START:
            return {
                ...state,
                loading: true,
            };
        case AUTH_FINISHED:
            return {
                ...state,
                loading: false,
            };
        case AUTH_USER:
            return {
                ...state,
                ...action.payload,
            };
        case CLEAN_AUTH_ERROR:
            return {
                ...state,
                error: null,
            };
        default:
            return state;
    }
};
