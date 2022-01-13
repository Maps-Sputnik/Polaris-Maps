import { takeLatest } from 'redux-saga/effects';
import * as types from '../Actions/types';
import User from './User';
import Post from './Post';
import Friend from './Friend';

function* MainSaga() {
  yield takeLatest(types.GET_CONTACTS, User.getContacts);
  yield takeLatest(types.FETCH_POSTS_REQUEST, Post.fetch);
  yield takeLatest(types.MAKE_FRIEND_REQUEST, Friend.requestFriend);
}

export default MainSaga;
