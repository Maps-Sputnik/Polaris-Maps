import * as types from '../Actions/types';

const initialState = {
  permissionGranted: false,
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PERMISSION:
      return {
        ...state,
        permissionGranted: action.payload,
      };
    default:
      return state;
  }
};

export default mapReducer;
