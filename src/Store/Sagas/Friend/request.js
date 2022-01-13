import { put, call } from 'redux-saga/effects';
import { makeFriend } from '@services/Friend';
import {
  MAKE_FRIEND_RESPONSE as response,
  MAKE_FRIEND_FAILURE as failure,
  ENABLE_LOADER as enableLoader,
  DISABLE_LOADER as disableLoader,
} from '@store/Actions/types';

function* fetchData(action) {
  yield put({ type: enableLoader, payload: { type: 'friend' } });
  try {
    const res = yield call(makeFriend, action.payload);
    if (res.status === 200) {
      const { friend } = res.data;
      console.log('FRIEND', friend);
      yield put({ type: response, payload: friend });
    } else {
      yield put({ type: failure, payload: { msg: 'Something went wrong' } });
      yield put({ type: disableLoader, payload: { type: 'friend' } });
    }
  } catch (e) {
    yield put({ type: disableLoader, payload: { type: 'friend' } });
  } finally {
    yield put({ type: disableLoader, payload: { type: 'friend' } });
  }
}

export default fetchData;
