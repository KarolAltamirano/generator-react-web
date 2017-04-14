// @flow

import { combineReducers } from 'redux';

import template from './templateReducer';

/**
 * Combine reducers
 */
const rootReducer = combineReducers({
  template,
});

export default rootReducer;
