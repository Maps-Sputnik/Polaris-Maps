import { combineReducers } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import userReducer from './User';
// import { deleteToken } from '@services/HandleToken'

const appReducer = combineReducers({
  user: userReducer,
});

const RootReducer = (state, action) => {
  return appReducer(state, action);
};
export default appReducer;
