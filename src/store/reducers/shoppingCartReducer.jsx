
import * as types from '../actions/shoppingCartAction/shoppingCartActionTypes';
const initialState = {
    cart: [],
    payment: {},
    address: {}
};

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            return {
                ...state,
                cart: [...state.cart, action.payload]
            };
        case types.REMOVE_FROM_CART:
            const updatedCart = state.cart.filter(
                item => item.product.id !== action.payload
            );
            return {
                ...state,
                cart: updatedCart
            };
        case types.UPDATE_PAYMENT_INFO:
            return {
                ...state,
                payment: action.payload
            };
        case types.UPDATE_ADDRESS_INFO:
            return {
                ...state,
                address: action.payload
            };
        default:
            return state;
    }
};

export default shoppingCartReducer;