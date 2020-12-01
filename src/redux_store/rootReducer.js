import { combineReducers } from "redux";
import genReducer from "./general/reducer";
import cartReducer from "./cart/reducer";

export default combineReducers({ ...genReducer, ...cartReducer });
