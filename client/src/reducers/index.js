import { combineReducers } from "redux";
import ask from "./askReducer";
import room from "./roomReducer";

export default combineReducers({
  ask,
  room,
});
