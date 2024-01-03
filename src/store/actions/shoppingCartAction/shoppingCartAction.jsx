import * as types from './shoppingCartActionTypes';


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

const updateAddressInfo = (addressInfo) => ({
    type: types.UPDATE_ADDRESS_INFO,
    payload: addressInfo
});



export {
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    clearCart,
    setCheckStatus,
    updatePaymentInfo,
    updateAddressInfo
};