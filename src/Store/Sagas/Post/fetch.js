import { put, call } from 'redux-saga/effects';
import { fetchAll } from '@services/Post';
import {
  FETCH_POSTS_RESPONSE as response,
  FETCH_POSTS_FAILURE as failure,
  ENABLE_LOADER as enableLoader,
  DISABLE_LOADER as disableLoader,
} from '@store/Actions/types';

function* fetchData(action) {
  yield put({ type: enableLoader, payload: { type: 'general' } });
  try {
    const res = yield call(fetchAll, action.payload);
    if (res.status === 200) {
      const { posts } = res.data;
      console.log('POSTS', posts);
      yield put({ type: response, payload: posts });
    } else {
      yield put({ type: failure, payload: { msg: 'Something went wrong' } });
      yield put({ type: disableLoader, payload: { type: 'general' } });
    }
  } catch (e) {
    yield put({ type: disableLoader, payload: { type: 'general' } });
  } finally {
    yield put({ type: disableLoader, payload: { type: 'general' } });
  }
}

export default fetchData;
