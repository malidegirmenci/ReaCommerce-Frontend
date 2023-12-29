import * as types from './userActionTypes';
import { instanceAxios } from '../../store';
import Swal from 'sweetalert2';

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
var toastMixin = Swal.mixin({
    toast: true,
    icon: 'success',
    title: 'General Title',
    animation: false,
    position: 'top-right',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
});

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

