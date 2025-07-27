import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});
