import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserReducer from './User';
import MapReducer from './Map';
// import { deleteToken } from '@services/HandleToken'

const appReducer = combineReducers({
  user: UserReducer,
  map: MapReducer,
});

const RootReducer = (state, action) => {
  return appReducer(state, action);
};
export default appReducer;
