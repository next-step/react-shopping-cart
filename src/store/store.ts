import { configureStore } from "@reduxjs/toolkit";
import itemReducer from "../reducers/itemReducer";

export const store = configureStore({
  reducer: {
    item: itemReducer,
  },
});
