import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

export default function configureStore(initialState) {
    var middleware,
        logger = createLogger({ collapsed: true });

    if (process.env.NODE_ENV === 'development') {
        middleware = [thunk, reduxImmutableStateInvariant(), logger];
    } else {
        middleware = [thunk];
    }

    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )
    );
}
