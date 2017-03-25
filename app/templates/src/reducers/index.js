// @flow

import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';

import template from './templateReducer';

/**
 * Combine reducers
 */
const rootReducer = combineReducers({
  template,
  routing
});

export default rootReducer;
