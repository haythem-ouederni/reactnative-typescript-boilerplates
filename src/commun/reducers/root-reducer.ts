import {combineReducers} from 'redux';
import * as homeReducer from '../../screens/tabs/home/home.reducer';

const rootReducer = combineReducers(Object.assign(homeReducer));

export default rootReducer;

