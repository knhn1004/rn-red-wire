import {
    AUTH_USER,
    AUTH_START,
    AUTH_FINISHED,
    CLEAN_AUTH_ERROR,
    LOGOUT,
    AUTO_LOAD_START,
    AUTO_LOAD_FINISHED,
    UPDATE_USER_DATA,
} from '../actions/types';

const INITIAL_STATE = {
    user: [],
    isAuth: false,
    error: null,
    loading: false,
    autoLoading: false,
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
        case LOGOUT:
            return {
                ...INITIAL_STATE,
            };
        case AUTO_LOAD_START:
            return {
                ...state,
                autoLoading: true,
            };
        case AUTO_LOAD_FINISHED:
            return {
                ...state,
                autoLoading: false,
            };
        case UPDATE_USER_DATA:
            return {
                ...state,
                ...action.payload,
            };
        default:
            return state;
    }
};
