import * as types from '../Actions/types';

const initialState = {
  name: '',
  phoneNumber: {},
  email: '',
  contacts: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_CONTACTS:
      return { ...state, contacts: action.payload };
    default:
      return state;
  }
};

export default userReducer;
