import { takeLatest } from 'redux-saga/effects';
import * as types from '../Actions/types';
import User from './User';
import Post from './Post';
import Friend from './Friend';
import Map from './Map';

function* MainSaga() {
  // User
  yield takeLatest(types.GET_CONTACTS, User.getContacts);

  // Post
  yield takeLatest(types.FETCH_POSTS_REQUEST, Post.fetch);

  // Friend
  yield takeLatest(types.MAKE_FRIEND_REQUEST, Friend.requestFriend);

  // Map
  yield takeLatest(types.GET_ACCESS_TOKEN, Map.getAccessToken);
}

export default MainSaga;
