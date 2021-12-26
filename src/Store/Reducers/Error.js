import * as types from '../Actions/types';

const initialState = {
  message: '',
  error: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ENABLE_ERROR:
      return { ...state, error: true, message: action.payload.message };
    case types.DISABLE_LOADER:
      return { ...state, error: false, message: '' };
    default:
      return state;
  }
};

export default userReducer;
