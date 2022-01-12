import * as types from '../Actions/types';

const initialState = {
  all: [],
  success: false,
  err: false,
  request: null,
};
const FriendReducer = (state = initialState, action) => {
  // fetch all
  switch (action.type) {
    case types.MAKE_FRIEND_RESPONSE:
      return { ...state, request: action.payload.friend, success: true, err: false };
    case types.MAKE_FRIEND_FAILURE:
      return { ...state, err: action.payload.msg };
    default:
      return state;
  }
};

export default FriendReducer;
