import * as types from './orderActionTypes';

const setAddress = (address) => ({
    type:types.SET_ADDRESS,
    payload: address
})

const setCart = (cart) => ({
    type:types.SET_CART,
    payload: cart,
})

const setPayment = (payment) => ({
    type:types.SET_PAYMENT,
    payload: payment,
})

const setPrice = (price) => ({
    type:types.SET_PRICE,
    payload: price
})
export {
    setAddress,
    setCart,
    setPayment,
    setPrice,
}