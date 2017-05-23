import {combineReducers} from 'redux';
import * as homeReducer from '../../screens/tabs/home/home.reducer';
import * as simpleScreenReducer from '../../screens/simpleScreen/simpleScreen.reducer';

// const rootReducer = combineReducers(Object.assign(homeReducer));
const rootReducer = combineReducers({...simpleScreenReducer, ...homeReducer});

export default rootReducer;

