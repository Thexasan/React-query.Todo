import { combineReducers } from "@reduxjs/toolkit";
import states from "./states";

const rootReducer = combineReducers({
    states,
});

export default rootReducer;
