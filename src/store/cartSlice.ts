import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState, Product } from "./store";

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.products.find(
        (item) => item.id === action.payload.id - 1
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      state.totalQuantity += action.payload.quantity;
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const existingItem = state.products.find(
        (item) => item.id === action.payload - 1
      );
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.products = state.products.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.totalQuantity = 0;
    },
    increaseQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.products.find(
        (item) => item.id === action.payload - 1
      );
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalQuantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<number>) => {
      const existingItem = state.products.find(
        (item) => item.id === action.payload - 1
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
        state.totalQuantity -= 1;
      }
    },
    toggleCheck: (state, action: PayloadAction<number>) => {
      const existingItem = state.products.find(
        (item) => item.id === action.payload - 1
      );
      if (existingItem) {
        existingItem.isChecked = !existingItem.isChecked;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  clearCart,
  increaseQuantity,
  decreaseQuantity,
  toggleCheck,
} = cartSlice.actions;
export default cartSlice;
