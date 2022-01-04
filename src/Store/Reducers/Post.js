import * as types from '../Actions/types';

const initialState = {
  all: [],
  success: false,
  err: false,
};
const PostReducer = (state = initialState, action) => {
  // fetch all
  switch (action.type) {
    case types.FETCH_POSTS_RESPONSE:
      return { ...state, all: action.payload.posts, success: true, err: false };
    case types.FETCH_POSTS_FAILURE:
      return { ...state, err: action.payload.msg };
    default:
      return state;
  }
};

export default PostReducer;
