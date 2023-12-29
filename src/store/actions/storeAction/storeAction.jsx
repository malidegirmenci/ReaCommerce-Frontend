import * as types from './storeActionTypes';
import { instanceAxios } from '../../store';

export const setSellerStore = (storeData) => ({
    type: SET_SELLER_STORE,
    payload: storeData
});
