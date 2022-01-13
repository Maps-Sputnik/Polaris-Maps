import MapboxGL from '@react-native-mapbox-gl/maps';
import { put, call } from 'redux-saga/effects';
import { getAccessToken } from '@services/Map';
import { saveToken } from '@services/HandleToken';

function* fetchData(action) {
  try {
    const res = yield call(getAccessToken);
    console.log(res.data);
    if (res.status === 200) {
      const { accessToken } = res.data;
      yield call(saveToken, 'mapboxAccessToken', accessToken);
      MapboxGL.setAccessToken(accessToken);
    } else {
      // handle error
    }
  } catch (e) {
    // handle error
  }
}

export default fetchData;
