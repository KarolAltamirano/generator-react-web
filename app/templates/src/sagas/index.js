// @flow

import { takeEvery } from 'redux-saga/effects';

import ActionTypes from '../constants/ActionTypes';

import templateSaga from './templateSaga';

export default function* rootSaga(): any {
  yield takeEvery(ActionTypes.PLACEHOLDER_ASYNC, templateSaga);
}
