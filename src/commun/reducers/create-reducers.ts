/**
 * This method is created to help devleopers avoid the swtich expression
 * @param initialState
 * @param handlers
 */
export default function createReducer(initialState : any, handlers : any) {
  return function reducer(state : any = initialState, action : any) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action);
    } else {
      return state;
    }
  };
}
