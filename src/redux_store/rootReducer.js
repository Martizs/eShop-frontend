import { combineReducers } from "redux";
import genReducer from "./general/reducer";
import cartReducer from "./cart/reducer";
import sendReducer from "./send/reducer";

export default combineReducers({
  ...genReducer,
  ...cartReducer,
  ...sendReducer,
});
