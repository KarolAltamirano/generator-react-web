// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import createLogger from 'redux-logger';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import rootSaga from '../sagas';

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
  const sagaMiddleware = createSagaMiddleware();

  // set middleware for development or production build
  if (process.env.NODE_ENV === 'development') {
    middleware = [sagaMiddleware, reduxImmutableStateInvariant(), logger];
  } else {
    middleware = [sagaMiddleware];
  }

  // create store
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  // run the saga
  sagaMiddleware.run(rootSaga);

  return store;
}
