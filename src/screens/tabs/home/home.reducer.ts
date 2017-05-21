import createReducer from '../../../commun/reducers/create-reducers';
import * as types from '../../../commun/constants/actions-types';
import initialSate from '../../../commun/reducers/initial-state';

/**
 * This method extracts the list of movies.
 */
export const retrieveListMovies = createReducer(initialSate.home, {
    [types.RETRIEVE_MOVIES_LIST_SUCCESS](state : any, action : any) {
        console.log('1111111');
        console.log(JSON.stringify(state));
        let newState : any = {
            ...state,
            listMovies: action.listMovies
        };
        return newState;
    }
});