import * as types from './productActionTypes';
import  instanceAxios  from '../../../api/axiosInstance';


const fetchProductsRequest = () => ({
    type: types.FETCH_PRODUCTS_REQUEST
});

const fetchProductsSuccess = (productList, totalProductCount) => ({
    type: types.FETCH_PRODUCTS_SUCCESS,
    payload: {
        productList,
        totalProductCount,
    }
});

const fetchProductsFailure = () => ({
    type: types.FETCH_PRODUCTS_FAILURE
});

const changeActivePage = (pageNumber) => ({
    type: types.CHANGE_ACTIVE_PAGE,
    payload: pageNumber
});

const beginFetch = () => (dispatch) => {
    console.log("Started fetching processes for products")
    dispatch(fetchProductsRequest());
    instanceAxios
        .get("/products")
        .then((response) => {
            //console.log(response)
            dispatch(fetchProductsSuccess(response.data.products,response.data.total));
        })
        .catch((error) => {
            console.log("Products Fetching Error:"+ error.message);
            dispatch(fetchProductsFailure());
        })
}

export {
    fetchProductsRequest,
    fetchProductsSuccess,
    fetchProductsFailure,
    changeActivePage,
    beginFetch
};