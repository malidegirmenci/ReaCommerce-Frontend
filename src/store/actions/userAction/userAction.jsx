import * as types from './userActionTypes';

export const createUserRequest = (userData) => {
    return {
        type:types.SIGN_UP_USER_REQUEST,
        payload:userData,
    };
};

export const createUserSuccess = (response) => {
    return {
        type:types.SIGN_UP_USER_SUCCESS,
        payload:response,
    };
};

export const createUserFailure = (error) => {
    return {
        type:types.SIGN_UP_USER_FAILURE,
        payload:error,
    };
};
