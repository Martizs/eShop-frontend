import { cartActionTypes } from "./actions";
/* utils */
import cloneDeep from "lodash/cloneDeep";

const cartItemsInit = [];

const cartItems = (state = cartItemsInit, action) => {
  switch (action.type) {
    case cartActionTypes.ADD_CART_ITEM: {
      const newCartIts = cloneDeep(state);
      newCartIts.push(action.data);
      return newCartIts;
    }
    case cartActionTypes.SET_ITEM_COUNT: {
      const newCartIts = cloneDeep(state);
      newCartIts[action.data.index].selectedAmount = action.data.count;
      return newCartIts;
    }
    case cartActionTypes.REM_ITEM: {
      const newCartIts = cloneDeep(state);
      newCartIts.splice(action.index, 1);
      return newCartIts;
    }
    case cartActionTypes.INIT_CART: {
      return [];
    }
    default:
      return state;
  }
};

const cartReducer = {
  cartItems,
};

export default cartReducer;
