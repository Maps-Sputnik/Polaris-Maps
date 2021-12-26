import * as types from '../Actions/types';

const initialState = {
  general: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ENABLE_LOADER:
      return { ...state, [action.payload.type]: true };
    case types.DISABLE_LOADER:
      return { ...state, [action.payload.type]: false };
    default:
      return state;
  }
};

export default userReducer;
