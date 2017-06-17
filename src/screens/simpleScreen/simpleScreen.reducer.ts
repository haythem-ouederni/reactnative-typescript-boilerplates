import createReducer from '../../commun/reducers/create-reducers';
import * as types from '../../commun/constants/actions-types';
import initialSate from '../../commun/reducers/initial-state';

/**
 * This method extracts the list of todos
 */
export const retrieveListTodos = createReducer(initialSate.simpleScreen, {
    [types.RETRIEVE_LIST_TODOS](state : any, action : any) {
        let newState = {
            ...state,
            todos: action.todos
        };
        return newState;
    }
});