const ADD_CART_ITEM = "ADD_CART_ITEM";

export const addCartItem = (data) => {
  return { type: ADD_CART_ITEM, data };
};

export const cartActionTypes = {
  ADD_CART_ITEM,
};
