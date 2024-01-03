import * as types from './userActionTypes';
import  instanceAxios  from '../../../api/axiosInstance';
import toastMixin from '../../../utils/sweetAlertToastify';

export const userRequest = (userData) => {
    return {
        type: types.USER_REQUEST,
        payload: userData,
    };
};

export const userSuccess = (response) => {
    return {
        type: types.USER_SUCCESS,
        payload: response,
    };
};

export const userFailure = (error) => {
    return {
        type: types.USER_FAILURE,
        payload: error,
    };
};

export const userLogOut = () => {
    return {
        type: types.USER_LOG_OUT
    }
} 

export const signUpUser = (userData, history) => (dispatch) => {
    dispatch(userRequest(userData));
    instanceAxios
        .post('/signup', userData)
        .then((response) => {
            dispatch(userSuccess(response.data));
            toastMixin.fire({
                animation: true,
                title: "Sign up has been successfully"
            });
            history.goBack();
        }).catch((error) => {
            dispatch(userFailure(error))
            toastMixin.fire({
                animation: true,
                title: "Sign up has been failed",
                icon:'error',
            });
        })
};

export const loginUser = (userData, history,setToken) => (dispatch) => {
    dispatch(userRequest(userData));
    instanceAxios
        .post('/login', userData)
        .then((response) => {
            dispatch(userSuccess(response.data));
            setToken(response.data.token)
            toastMixin.fire({
                animation: true,
                title: "Login has been successfully"
            });
            history.push("/");
        }).catch((error) => {
            dispatch(userFailure(error))
            toastMixin.fire({
                animation: true,
                title: "Login has been failed",
                icon:'error',
            });
        })
};

export const logOutUser = (history) => (dispatch) => {
    dispatch(userLogOut());
    toastMixin.fire({
        animation: true,
        title: "Log out has been successfully"
    });
    history.push("/");
}

