import * as types from '../actions/shoppingCartAction/shoppingCartActionTypes';

const initialState = {
    cart: [],
    payment: {},
    address: []
};

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            return {
                ...state,
                cart: [
                    ...state.cart, { 
                    count: 1, checked: true,   ...action.payload  }
                ]
            };
        case types.REMOVE_FROM_CART:
            const updatedCart = state.cart.filter(
                item => parseInt(item.product.id) !== parseInt(action.payload)
            );
            return {
                ...state,
                cart: updatedCart
            };
        case types.UPDATE_CART_ITEM_QUANTITY:
            const { productId, isAdding } = action.payload;
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.product.id == productId ?
                        { ...item, count: isAdding ? item.count + 1 : item.count - 1 } : item),
            }
        case types.SET_CHECK_STATUS:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.product.id == productId ? { ...item, checked: isChecked } : item),
            }
            case types.CLEAR_CART:
                return{
                    ...state,
                    cart:[],
                }
        case types.UPDATE_PAYMENT_INFO:
            return {
                ...state,
                payment: action.payload
            };
        case types.ADD_TO_ADDRESSES:
            return {
                ...state,
                address: [...state.address,action.payload]
            };
        default:
            return state;
    }
};

export default shoppingCartReducer;