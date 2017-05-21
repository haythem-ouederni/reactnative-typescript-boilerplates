import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root-reducer';
// import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

let middleware = [thunk];

if (__DEV__) {
	const reduxImmutableStateInvariant = require('redux-immutable-state-invariant').default();
	const { createLogger } = require('redux-logger');

	const logger = createLogger({ collapsed: true });
	middleware = [...middleware, reduxImmutableStateInvariant, logger];
} else {
	middleware = [...middleware];
}

export default function configureStore(initialState?: any) {
	return createStore(
		rootReducer,
		initialState,
		applyMiddleware(...middleware)
	);
}
