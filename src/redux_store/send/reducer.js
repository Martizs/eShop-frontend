import { sendActionTypes } from "./actions";

const initSend = null;

const sendOpt = (state = initSend, action) => {
  switch (action.type) {
    case sendActionTypes.SET_SEND_OPT:
      return action.data;
    case sendActionTypes.INIT_SEND_OPT:
      return null;
    default:
      return state;
  }
};

const sendReducer = {
  sendOpt,
};

export default sendReducer;
