import createReducer from '../../commun/reducers/create-reducers';
import * as types from '../../commun/constants/actions-types';
import initialSate from '../../commun/reducers/initial-state';
import {TodoData} from '../../data/todos/todo';

/**
 * This method extracts the list of todos
 */
export const retrieveListTodos = createReducer(initialSate.simpleScreen, {
    [types.RETRIEVE_LIST_TODOS](state : any, action : any) {
        let newState = {
            ...state,
            todos: []
        };

        action
            .todos
            .forEach(aTodoWs => {
                newState
                    .todos
                    .push(new TodoData(aTodoWs));
            });
        return newState;
    }
});