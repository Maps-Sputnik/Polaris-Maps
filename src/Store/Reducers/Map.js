import * as types from '../Actions/types';

const initialState = {
  permissionGranted: null,
  styleUrl: 'mapbox://styles/polaris-maps/ckxln0bve2t5814krx77s65hl',
};

const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_PERMISSION:
      return {
        ...state,
        permissionGranted: action.payload,
      };
    case types.SET_MAP_STYLE:
      return {
        ...state,
        styleUrl: action.payload,
      };
    default:
      return state;
  }
};

export default mapReducer;
