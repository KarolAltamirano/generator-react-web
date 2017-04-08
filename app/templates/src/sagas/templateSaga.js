// @flow

import { delay } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

import AppActions from '../actions/AppActions';

export default function* templateSaga(action: Object): any {
  yield call(delay, 1000);
  yield put(AppActions.placeholder(action.inc));
}
