import * as types from './userActionTypes';
import  instanceAxios  from '../../../api/axiosInstance';
import toastMixin from '../../../utils/sweetAlertToastify';
export const createUserRequest = (userData) => {
    return {
        type: types.SIGN_UP_USER_REQUEST,
        payload: userData,
    };
};

export const createUserSuccess = (response) => {
    return {
        type: types.SIGN_UP_USER_SUCCESS,
        payload: response,
    };
};

export const createUserFailure = (error) => {
    return {
        type: types.SIGN_UP_USER_FAILURE,
        payload: error,
    };
};


export const signUpUser = (userData, history) => (dispatch) => {
    dispatch(createUserRequest(userData));
    instanceAxios
        .post('/signup', userData)
        .then((response) => {
            dispatch(createUserSuccess(response.data));
            toastMixin.fire({
                animation: true,
                title: response.data.message
            });
            history.goBack();
        }).catch((error) => {
            dispatch(createUserFailure(error))
            toastMixin.fire({
                animation: true,
                title: error,
                icon:'error',
            });
        })
};

