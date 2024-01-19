import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../reducers/reducer";

export const store = configureStore({
  reducer: rootReducer,
});
