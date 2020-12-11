import { enLang, ltLang } from "language/";
import { genActionTypes } from "./actions";

const initLogIn = null;

const loggedIn = (state = initLogIn, action) => {
  if (action.type === genActionTypes.SET_LOG_IN) {
    return action.value;
  }

  return state;
};

const initMenu = false;

const menu = (state = initMenu, action) => {
  if (action.type === genActionTypes.TOGGLE_MENU) {
    return !state;
  }

  return state;
};

const initLang = enLang;

const currLang = (state = initLang, action) => {
  if (action.type === genActionTypes.SET_LANG) {
    return action.lang;
  }

  return state;
};

const genReducer = {
  loggedIn,
  menu,
  currLang,
};

export default genReducer;
