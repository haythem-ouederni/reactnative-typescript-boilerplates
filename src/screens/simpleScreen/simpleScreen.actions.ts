import * as types from '../../commun/constants/actions-types';
import {database} from '../../commun/utils/firebase-config';

/**
 * Method called of retrieving list of Todos success
 * @param todosSnap: the snapshot of Todos got from the Firebase database
 */
export function retrieveListTodosSuccess(todosSnap : firebase.database.DataSnapshot) {
    var lTodos = [];

    // we get the different todos in the list
    todosSnap.forEach((child) => {
        lTodos.push(child);

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