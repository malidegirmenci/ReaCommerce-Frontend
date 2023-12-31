import * as types from './shoppingCartActionTypes';
import  instanceAxios  from '../../../api/axiosInstance';

const addToCart = (product, count) => ({
    type: types.ADD_TO_CART,
    payload: {
        count,
        product
    }
});

const removeFromCart = (productId) => ({
    type: types.REMOVE_FROM_CART,
    payload: productId
});

const updatePaymentInfo = (paymentInfo) => ({
    type: types.UPDATE_PAYMENT_INFO,
    payload: paymentInfo
});

const updateAddressInfo = (addressInfo) => ({
    type: types.UPDATE_ADDRESS_INFO,
    payload: addressInfo
});

export {
    addToCart,
    removeFromCart,
    updatePaymentInfo,
    updateAddressInfo
};