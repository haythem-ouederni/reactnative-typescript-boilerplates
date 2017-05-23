import createReducer from '../../commun/reducers/create-reducers';
import * as types from '../../commun/constants/actions-types';
import initialSate from '../../commun/reducers/initial-state';

/**
 * This method extracts the list of movies.
 */
export const incrementCount = createReducer(initialSate.simpleScreen, {
    [types.INCREMENT_SIMPLE_SCREEN_NB_CLICKS](state : any, action : any) {
        let newState = {
            ...state,
            nbClicks: action.nbClicks
        };
        return newState;
    }
});