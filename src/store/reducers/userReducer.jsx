import * as types from '../actions/userAction/userActionTypes';
const initialState = {
    isLoading: false,
    error: null,
    userData: {},
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.SIGN_UP_USER_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };
        case types.SIGN_UP_USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userData: action.payload,
            };
        case types.SIGN_UP_USER_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;