import {createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/logOnlyInProduction';
import rootReducer from './reducers';

const middleware = [thunk];
const initialState = {};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || composeWithDevTools;
const store = createStore(
    rootReducer, initialState,
    composeEnhancers(
        applyMiddleware(...middleware)
    )
);
export default store;