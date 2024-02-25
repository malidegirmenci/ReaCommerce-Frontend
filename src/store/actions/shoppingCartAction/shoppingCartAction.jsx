import * as types from './shoppingCartActionTypes';
import axiosWithAuth from '../../../api/axiosWithAuth';

const fetchToCart = (cart) => ({
    type: types.FETCH_TO_CART,
    payload: [...cart]
}) 

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

const updateHasCouponCode =  (hasCouponCode) => ({
    type:types.UPDATE_HAS_COUPON_CODE,
    payload:hasCouponCode
})

const saveCartItemToDB = (token, history, cartItem) => {
    axiosWithAuth()
        .post(`/cart/${token}`, cartItem )
        .then((response) => {
            console.log("CartItem", response)
        })
        .catch((error) => {
            console.log("Hata verdi ", error)
            history.push("/login");
        });
}
const removeCartItemFromDB = (token, cartItemId) => {
    axiosWithAuth()
        .delete(`/cart/${token}/${cartItemId}`)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log("Hata verdi", error)
        })
} 
const fetchCart = (token, history, dispatch) => {
    token && axiosWithAuth()
        .get(`/cart/${token}`)
        .then((response) => {
            dispatch(fetchToCart(response.data))
        })
        .catch((error) => {
            console.log("Hata verdi ", error)
            history.push("/login");
        });
}
const updateCartItemQuantityToDB = (id, isAdding) => {
    axiosWithAuth()
    .put(`/cart/${id}/quantity/${isAdding}`)
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error);
    }) 
}

const updateCartItemIsCheckedToDB = (id, isChecked) => {
    axiosWithAuth()
    .put(`/cart/${id}/checkCartItem/${isChecked}`)
    .then((response) => {
        console.log(response.data)
    })
    .catch((error) => {
        console.log(error)
    })
}

export {
    addToCart,
    removeFromCart,
    updateCartItemQuantity,
    clearCart,
    setCheckStatus,
    fetchCart,
    saveCartItemToDB,
    removeCartItemFromDB,
    updateCartItemQuantityToDB,
    updateCartItemIsCheckedToDB,
    updateHasCouponCode,
};