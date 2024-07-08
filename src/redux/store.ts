import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./slices/RootSlices";

export const store = configureStore({
  reducer,
  devTools: true,
});

export {};
