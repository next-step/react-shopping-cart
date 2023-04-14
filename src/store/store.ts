import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import orderSlice from "./orderSlice";

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  order: orderSlice.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const initialState: SliceState = {
  products: [
    { id: 0, name: "", price: 0, quantity: 1, imageUrl: "", isChecked: false },
  ],
  totalQuantity: 0,
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

export type SliceState = {
  products: Product[];
  totalQuantity: number;
};
