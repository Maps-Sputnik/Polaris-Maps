import { takeLatest } from 'redux-saga/effects';
import * as types from '../Actions/types';
import UserSagas from './User';
import Post from './Post';

function* MainSaga() {
  yield takeLatest(types.GET_CONTACTS, UserSagas.getContacts);
  yield takeLatest(types.FETCH_POSTS_REQUEST, Post.fetch);
}

export default MainSaga;
