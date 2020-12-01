const SET_SEND_OPT = "SET_SEND_OPT";
export const setSendOpt = (data) => {
  return { type: SET_SEND_OPT, data };
};

const INIT_SEND_OPT = "INIT_SEND_OPT";
export const initSendOpt = () => {
  return { type: INIT_SEND_OPT };
};

export const sendActionTypes = {
  INIT_SEND_OPT,
  SET_SEND_OPT,
};
