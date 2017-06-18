import * as types from '../../commun/constants/actions-types';
import initialSate from '../../commun/reducers/initial-state';

/**
 * This method extracts the list of todos
 */
const retrieveListTodos = (state : any, action : any) => {
    let newState = {
        ...state,
        todos: action.todos,
        isFetchingTodos: false
    };
    return newState;
};

/**
 * This method is called when we begin fetching data from Firebase/database
 */
const onRetrieveListTodosBegin = (state : any, _action : any) => {
    let newState = {
        ...state,
        isFetchingTodos: true
    };
    return newState;
};

export const todosReducer = (state = initialSate.simpleScreen, action : any) => {
    switch (action.type) {
        case types.RETRIEVE_LIST_TODOS:
            return retrieveListTodos(state, action);
        case types.RETRIEVE_LIST_TODOS_BEGINS:
            return onRetrieveListTodosBegin(state, action);
        default:
            return state;
    }
};