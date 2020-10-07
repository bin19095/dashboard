import { text } from '@fortawesome/fontawesome-svg-core';
import {combineReducers } from 'redux';
import searchReducer from './searchReducer';

export default combineReducers({
    titles: searchReducer,
    
})