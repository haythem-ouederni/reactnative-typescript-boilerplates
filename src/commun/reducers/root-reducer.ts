import {combineReducers} from 'redux';
import * as simpleScreenReducer from '../../screens/simpleScreen/simpleScreen.reducer';

const rootReducer = combineReducers({...simpleScreenReducer});

export default rootReducer;

