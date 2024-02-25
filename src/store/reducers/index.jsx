import { combineReducers } from 'redux';
import globalReducer from './globalReducer';
import userReducer from './userReducer';
import productReducer from './productReducer';
import shoppingCartReducer from './shoppingCartReducer';
import storeReducer from './storeReducer';
import orderReducer from './orderReducer';

const rootReducer = combineReducers({
    global: globalReducer,
    user: userReducer,
    products: productReducer,
    shoppingCart: shoppingCartReducer,
    store: storeReducer,
    order: orderReducer,
});

export default rootReducer;