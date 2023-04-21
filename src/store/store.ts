import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type SliceState = {
  products: Product[];
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  isChecked: boolean;
};
