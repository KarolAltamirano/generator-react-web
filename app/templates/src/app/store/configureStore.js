// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

/**
 * Create Redux store
 *
 * @param  {Object} initialState initial state
 *
 * @return {Store}               redux store
 */
export default function configureStore(initialState?: Object): Store {
    let middleware;
    const logger = createLogger({ collapsed: true });

    // set middleware for development or production build
    if (process.env.NODE_ENV === 'development') {
        middleware = [thunk, reduxImmutableStateInvariant(), logger];
    } else {
        middleware = [thunk];
    }

    // create store
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
}
