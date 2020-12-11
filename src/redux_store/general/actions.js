const SET_LOG_IN = "SET_LOG_IN";

export const setLogin = (value) => {
  return { type: SET_LOG_IN, value };
};

const TOGGLE_MENU = "TOGGLE_MENU";

export const toggleMenu = () => {
  return { type: TOGGLE_MENU };
};

const SET_LANG = "SET_LANG";

export const setLang = (lang) => {
  return { type: SET_LANG, lang };
};

export const genActionTypes = {
  SET_LOG_IN,
  TOGGLE_MENU,
  SET_LANG,
};
