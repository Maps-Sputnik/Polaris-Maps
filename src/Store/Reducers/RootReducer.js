import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserReducer from './User';
import MapReducer from './Map';
import Loader from './Loader';
import Error from './Error';
// import { deleteToken } from '@services/HandleToken'

const appReducer = combineReducers({
  user: UserReducer,
  map: MapReducer,
  loader: Loader,
  error: Error,
});

const RootReducer = (state, action) => {
  return appReducer(state, action);
};
export default appReducer;
