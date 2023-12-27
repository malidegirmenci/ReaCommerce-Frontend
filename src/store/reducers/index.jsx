import { combineReducers } from 'redux';
import globalReducer from './globalReducer';
import userReducer from './userReducer';
/* import productReducer from './productReducer';
import shoppingCartReducer from './shoppingCartReducer';
import storeReducer from './storeReducer'; */

const rootReducer = combineReducers({
    global: globalReducer,
    user: userReducer,
});

export default rootReducer;