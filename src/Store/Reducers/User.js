import * as types from '../Actions/types';

const initialState = {
  name: '',
  phoneNumber: {},
  email: '',
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default userReducer;
