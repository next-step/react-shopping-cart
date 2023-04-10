import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, Cart } from "../types/cartTypes";

const initialState: Cart = {
  products: [
    { id: 0, name: "", price: 0, quantity: 0, imageUrl: "", isChecked: false },
  ],
  totalQuantity: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const existingItem = state.products.find(
        (item) => item.id === action.payload.id
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
        (item) => item.id === action.payload
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
  },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice;
