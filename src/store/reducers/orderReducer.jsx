import * as types from '../actions/orderAction/orderActionTypes';

const initialState = {
    cart: [],
    address: {},
    payment: {},
    price:0,
}

const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SET_ADDRESS:
            return {
                ...state,
                address: action.payload
            }
        case types.SET_PAYMENT:
            return {
                ...state,
                payment: action.payload
            }
        case types.SET_CART:
            return {
                ...state,
                cart: [...action.payload]
            }
            case types.SET_PRICE:
                return {
                    ...state,
                    price : action.payload
                }
        default:
            return state;
    }
}

export default orderReducer;