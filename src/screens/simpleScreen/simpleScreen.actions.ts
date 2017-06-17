import * as types from '../../commun/constants/actions-types';
import {database} from '../../commun/utils/firebase-config';
import {TodoData} from '../../data/todos/todo';

/**
 * Method called of retrieving list of Todos success
 * @param todosSnap: the snapshot of Todos got from the Firebase database
 */
export function retrieveListTodosSuccess(todosSnap : firebase.database.DataSnapshot) {
    var lTodos = [];

    // we get the different todos in the list
    todosSnap.forEach((child) => {
        // we transform the child into it's view equivalent and add it to the list to
        // return
        lTodos.push(new TodoData(child));

        // we return false to continue the iterations
        return false;
    });
    return {type: types.RETRIEVE_LIST_TODOS, todos: lTodos};
}
/**
 * This method retrieves the list of Todos from the database
 */
export function retrieveListTodos() {
    return function (dispatch) {
        return new Promise((_resolve, _reject) => {
            database
                .ref('todos')
                .on('value', (snap) => {
                    dispatch(retrieveListTodosSuccess(snap));
                    _resolve();
                });
        })
    }
}