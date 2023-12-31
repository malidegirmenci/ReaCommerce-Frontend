import * as types from '../actions/userAction/userActionTypes';

const initialState = {
    isLoading: false,
    error: null,
    response:"",
    userData: {},
};

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.USER_REQUEST:
            return {
                ...state,
                isLoading: true,
                userData:action.payload,
                error: null,
            };
        case types.USER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                response: action.payload,
                error:null,
            };
        case types.USER_FAILURE:
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