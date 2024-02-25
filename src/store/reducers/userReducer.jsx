import * as types from '../actions/userAction/userActionTypes';

const initialState = {
    isLoading: false,
    error: null,
    response: {},
    userData: {
        addresses: [],
        payments: [],
        order:{},
        orderList:[]
    },
    isNewRequest:false,
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case types.USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                response: action.payload,
                error: null,
            };
        case types.USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        case types.USER_LOG_OUT:
            return {
                isLoading: false,
                error: null,
                response: {},
                userData: {},
            }
        case types.SET_USER_ADDRESS:
            return {
                ...state,
                userData: {
                    addresses: [...action.payload],
                    payments: state.userData.payments,
                    order:state.userData.order
                }
            }
        case types.REMOVE_USER_ADDRESS:
            const updatedAddress = state.userData.addresses.filter(
                address => parseInt(address.id) !== parseInt(action.payload)
            );
            return {
                ...state,
                userData: {
                    addresses: updatedAddress,
                    payments: state.userData.payments,
                    order:state.userData.order
                }
            }
        case types.SET_USER_PAYMENT:
            return {
                ...state,
                userData: {
                    addresses: state.userData.addresses,
                    payments: [...action.payload],
                    order:state.userData.order
                }
            }
        case types.REMOVE_USER_PAYMENT:
            const updatedPayments = state.userData.payments.filter(
                payment => parseInt(payment.id) !== parseInt(action.payload)
            );
            return {
                ...state,
                userData: {
                    addresses: state.userData.addresses,
                    payments: updatedPayments,
                    order:state.userData.order
                }
            }
            case types.NEW_REQUEST_ADD:
                return {
                    ...state,
                    isNewRequest: action.payload,
                }
            case types.SET_ORDER:
                return {
                    ...state,
                    userData:{
                        addresses:state.userData.addresses,
                        payments:state.userData.payments,
                        order:action.payload
                    }
                }
            case types.FETCH_ORDER_LIST:
                return {
                    ...state,
                    userData:{
                        addresses:state.userData.addresses,
                        payments:state.userData.payments,
                        order:state.userData.order,
                        orderList: action.payload
                    }
                }
        default:
            return state;
    }
};

export default userReducer;