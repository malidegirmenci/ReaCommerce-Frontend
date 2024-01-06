import * as types from './shoppingCartActionTypes';
import axiosWithAuth from '../../../api/axiosWithAuth';
import toastMixin from '../../../utils/sweetAlertToastify';

const addToCart = (product) => ({
    type: types.ADD_TO_CART,
    payload: { product }
});

const removeFromCart = (productId) => ({
    type: types.REMOVE_FROM_CART,
    payload: productId
});

const updateCartItemQuantity = (productId, isAdding) => ({
    type: types.UPDATE_CART_ITEM_QUANTITY,
    payload: { productId, isAdding },
});
const clearCart = () => ({
    type: types.CLEAR_CART,
})
const setCheckStatus = (productId, isChecked) => ({
    type: types.SET_CHECK_STATUS,
    payload: { productId, isChecked },
})
const updatePaymentInfo = (paymentInfo) => ({
    type: types.UPDATE_PAYMENT_INFO,
    payload: paymentInfo
});

const addToAddresses = (address) => ({
    type: types.ADD_TO_ADDRESSES,
    payload: address
});

const saveAddress = (address) => {
    axiosWithAuth()
        .post('/user/address', address)
        .then((response) => {
            console.log("Response", response)
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

export {
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    clearCart,
    setCheckStatus,
    updatePaymentInfo,
    addToAddresses,
    saveAddress,
};