import { combineReducers } from "redux";
import sharedReducer from './sharedReducer/reducer';

export default combineReducers({
    sharedReducer: sharedReducer
    });