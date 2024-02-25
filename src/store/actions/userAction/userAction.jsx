import * as types from './userActionTypes';
import instanceAxios from '../../../api/axiosInstance';
import toastMixin from '../../../utils/sweetAlertToastify';
import axiosWithAuth from '../../../api/axiosWithAuth';
import { clearCart } from '../shoppingCartAction/shoppingCartAction';

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

export const setUserAddresses = (address) => {
    return {
        type: types.SET_USER_ADDRESS,
        payload: address
    }
}

export const removeUserAddress = (addressId) => {
    return {
        type: types.REMOVE_USER_ADDRESS,
        payload: addressId
    }
}

export const setUserPayments = (payments) => {
    return {
        type: types.SET_USER_PAYMENT,
        payload: payments
    }
}

export const removeUserPayment = (paymentId) => {
    return {
        type: types.REMOVE_USER_PAYMENT,
        payload: paymentId
    }
}
export const setNewRequestAdd = (newRequest) => {
    return {
        type: types.NEW_REQUEST_ADD,
        payload: newRequest,
    }
}
export const setOrder = (order) => {
    return {
        type: types.SET_ORDER,
        payload: order
    }
}
export const fetchOrderList = (orderList) => {
    return {
        type: types.FETCH_ORDER_LIST,
        payload: orderList
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
                icon: 'error',
            });
        })
};

export const loginUser = (userData, history, setToken) => (dispatch) => {
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
                icon: 'error',
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

export const saveAddress = (address, token, dispatch) => {
    axiosWithAuth()
        .post(`/address/${token}`, address)
        .then((response) => {
            console.log("Response", response)
            dispatch(setNewRequestAdd(true))
            toastMixin.fire({
                animation: true,
                title: "Address has been added successfully"
            });
        })
        .catch((error) => {
            console.log(error);
            toastMixin.fire({
                animation: true,
                title: "Address has been added failed"
            })
        })
}
export const getUserAddressesFromDB = (token, history, dispatch) => {
    token && axiosWithAuth()
        .get(`/address/${token}`)
        .then((response) => {
            dispatch(setUserAddresses(response.data));
            dispatch(setNewRequestAdd(false))
        })
        .catch((error) => {
            console.log("Hata verdi ", error)
            history.push("/login");
        });
}

export const removeAddressFromDB = (token, id) => {
    axiosWithAuth()
        .delete(`/address/${token}/${id}`)
        .then((response) => {
            toastMixin.fire({
                animation: true,
                title: "Address was successfully removed"
            });
        })
        .catch((error) => {
            toastMixin.fire({
                animation: true,
                title: "Address removal failed",
                icon: 'error',
            })
        })
}

export const getUserPaymentsFromDB = (token, history, dispatch) => {
    token && axiosWithAuth()
        .get(`/payment/${token}`)
        .then((response) => {
            dispatch(setUserPayments(response.data));
            dispatch(setNewRequestAdd(false))
        })
        .catch((error) => {
            history.push("/login");
        });
}

export const removePaymentFromDB = (token, id) => {
    axiosWithAuth()
        .delete(`/payment/${token}/${id}`)
        .then((response) => {
            console.log("Removed id:", id, " ", response.data)
        })
        .catch((error) => {
            console.log(error)
        })
}
export const savePayment = (payment, token, dispatch) => {
    axiosWithAuth()
        .post(`/payment/${token}`, payment)
        .then((response) => {
            dispatch(setNewRequestAdd(true))
            toastMixin.fire({
                animation: true,
                title: "Card has been added successfully"
            });
        })
        .catch((error) => {
            console.log(error);
            toastMixin.fire({
                animation: true,
                title: "Card has been added failed",
                icon: 'error',
            })
        })
}

export const saveOrderToDB = (token, order, dispatch) => {
    order && axiosWithAuth()
        .post(`/order/${token}`, order)
        .then((response) => {
            console.log("Response", response)
            dispatch(setOrder(response.data))
            dispatch(clearCart())
        })
        .catch((error) => {
            console.log(error);
            toastMixin.fire({
                animation: true,
                title: "Order has been added failed"
            })
        })
}
export const getOrderListFromDB = (token, dispatch, history) => {
    token && axiosWithAuth()
        .get(`/order/${token}`)
        .then((response) => {
            console.log(response)
            dispatch(fetchOrderList(response.data))
        })
        .catch((error) => {
            history.push("/login");
        });
}
