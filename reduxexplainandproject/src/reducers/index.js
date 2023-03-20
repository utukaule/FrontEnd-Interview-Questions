// Root reducer 
// We only one root reducer
// Create multiple reducers like upDown.js but all reducers 
// which are created are called in main reducer which is root reducer.
// 

import changeNumber from "./upDown";
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    changeNumber
})

export default rootReducer;