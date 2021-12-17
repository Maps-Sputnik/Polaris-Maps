import { takeLatest } from 'redux-saga/effects';
import * as types from '../Actions/types';

function* MainSaga() {
  yield takeLatest('SOME_ACTION', () => null);
}

export default MainSaga;
