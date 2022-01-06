import * as types from '../Actions/types';

const initialState = {
  language: 'uz',
  allLanguages: [
    { key: 'en', label: 'English' },
    { key: 'uz', label: "O'zbek" },
    { key: 'ru', label: 'Русский' },
  ],
};
const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CHANGE_LANGUAGE:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export default languageReducer;
