import { combineReducers } from "redux";
import genReducer from "./general/reducer";

export default combineReducers({ ...genReducer });
