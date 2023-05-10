import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import modalSlice from "./modalSlice";

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  modal: modalSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
