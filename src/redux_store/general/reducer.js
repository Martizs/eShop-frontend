import { genActionTypes } from "./actions";

const initLogIn = null;

const loggedIn = (state = initLogIn, action) => {
  if (action.type === genActionTypes.SET_LOG_IN) {
    return action.value;
  }

  return state;
};

const genReducer = {
  loggedIn,
};

export default genReducer;
