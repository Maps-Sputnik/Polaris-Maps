import { takeLatest } from 'redux-saga/effects';
import * as types from '../Actions/types';
import UserSagas from './User';

function* MainSaga() {
  yield takeLatest(types.GET_CONTACTS, UserSagas.getContacts);
}

export default MainSaga;
