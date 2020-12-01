const ADD_CART_ITEM = "ADD_CART_ITEM";
export const addCartItem = (data) => {
  return { type: ADD_CART_ITEM, data };
};

const SET_ITEM_COUNT = "SET_ITEM_COUNT";
export const setItemCount = (index, count) => {
  return { type: SET_ITEM_COUNT, data: { index, count } };
};

const REM_ITEM = "REM_ITEM";
export const remItem = (index) => {
  return { type: REM_ITEM, index };
};

const INIT_CART = "INIT_CART";
export const initCart = () => {
  return { type: INIT_CART };
};

export const cartActionTypes = {
  ADD_CART_ITEM,
  SET_ITEM_COUNT,
  REM_ITEM,
  INIT_CART,
};
