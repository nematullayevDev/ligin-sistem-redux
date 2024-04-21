import { configureStore } from "@reduxjs/toolkit";
import usersSLice from "./usersSLice";
import tokenSlice from "./tokenSlice";

export const store = configureStore({
  reducer: {
    users: usersSLice,
    token: tokenSlice,
  }
});
