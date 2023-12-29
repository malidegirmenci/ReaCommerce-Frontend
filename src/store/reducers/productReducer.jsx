import * as types from '../actions/productAction/productActionTypes';
const initialState = {
    productList: [],
    totalProductCount: 0,
    pageCount: 0,
    activePage: 1,
    fetchState: 'NOT_FETCHED'
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                fetchState: 'FETCHING'
            };
        case types.FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                fetchState: 'FETCHED',
                productList: action.payload.productList,
                totalProductCount: action.payload.totalProductCount,
            };
        case types.FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                fetchState: 'FAILED'
            };
        case types.CHANGE_ACTIVE_PAGE:
            return {
                ...state,
                activePage: action.payload
            };
        default:
            return state;
    }
};
export default productReducer;