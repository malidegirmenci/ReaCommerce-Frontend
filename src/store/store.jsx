import { legacy_createStore as createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index.jsx';

const middleWares = [thunk, logger]

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleWares)
    ));