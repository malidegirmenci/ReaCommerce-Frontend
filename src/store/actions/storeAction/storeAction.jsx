import * as types from './storeActionTypes';
import  instanceAxios  from '../../../api/axiosInstance';

export const setSellerStore = (storeData) => ({
    type: types.SET_SELLER_STORE,
    payload: storeData
});
