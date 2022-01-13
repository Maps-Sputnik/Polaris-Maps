import { combineReducers } from 'redux';
import UserReducer from './User';
import MapReducer from './Map';
import Error from './Error';
import Language from './Language';
import Post from './Post';
import Friend from './Friend';

const appReducer = combineReducers({
  user: UserReducer,
  language: Language,
  map: MapReducer,
  // loader: Loader,
  error: Error,
  post: Post,
  friend: Friend,
});

const RootReducer = (state, action) => {
  return appReducer(state, action);
};
export default appReducer;
