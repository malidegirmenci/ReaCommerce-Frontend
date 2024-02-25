import * as types from '../actions/shoppingCartAction/shoppingCartActionTypes';

const initialState = {
    cart: [],
    hasCouponCode: false,
};

const shoppingCartReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_TO_CART:
            return {
                ...state,
                cart: action.payload
            }
        case types.ADD_TO_CART:
            return {
                ...state,
                cart: [
                    ...state.cart, {
                        quantity: 1, isChecked: true, ...action.payload
                    }
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
                        { ...item, quantity: isAdding ? item.quantity + 1 : item.quantity - 1 } : item),
            }
        case types.SET_CHECK_STATUS:
            return {
                ...state,
                cart: state.cart.map((item) =>
                    item.product.id == action.payload.productId ? { ...item, isChecked: action.payload.isChecked } : item),
            }
        case types.CLEAR_CART:
            return {
                ...state,
                cart: [],
            }
        case types.UPDATE_HAS_COUPON_CODE:
            return {
                ...state,
                hasCouponCode : action.payload
            }
        default:
            return state;
    }
};

export default shoppingCartReducer;