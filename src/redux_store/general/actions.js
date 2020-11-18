const SET_LOG_IN = "SET_LOG_IN";

export const setLogin = (value) => {
  return { type: SET_LOG_IN, value };
};

export const genActionTypes = {
  SET_LOG_IN,
};
