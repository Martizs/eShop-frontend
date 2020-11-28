import { cartActionTypes } from "./actions";

const cartItemsInit = [];

const cartItems = (state = cartItemsInit, action) => {
  if (action.type === cartActionTypes.ADD_CART_ITEM) {
    state.push(action.data);
    return state;
  }

  return state;
};

const cartReducer = {
  cartItems,
};

export default cartReducer;
