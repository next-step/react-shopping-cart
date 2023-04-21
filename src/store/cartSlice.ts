/* eslint-disable no-console */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product, SliceState } from "./store";

export const initialState: SliceState = {
  products: [
    {
      id: 0,
      name: "",
      price: 0,
      imageUrl: "",
      quantity: 1,
      isChecked: false,
    },
  ],
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
        state.products = [...state.products, action.payload];
      }
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      const existingItem = state.products.find(
        (item) => item.id === action.payload - 1
      );
      if (existingItem) {
        state.products.length -= existingItem.quantity;
        state.products = state.products.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    clearCart: (state) => {
      state.products = [];
      state.products.length = 0;
    },
    increaseQuantity: (state, action: PayloadAction<Product>) => {
      const selectedProduct = action.payload;
      const existingItem = state.products.find(
        (item) => item.id === selectedProduct.id
      );
      if (existingItem && existingItem.quantity < 20) {
        existingItem.quantity += 1;
      }
    },
    decreaseQuantity: (state, action: PayloadAction<Product>) => {
      const selectedProduct = action.payload;
      const existingItem = state.products.find(
        (item) => item.id === selectedProduct.id
      );
      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },
    selectItem: (state, action: PayloadAction<Product>) => {
      const selectedProduct = action.payload;
      const existingItem = state.products.find(
        (item) => item.id === selectedProduct.id
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
  selectItem,
} = cartSlice.actions;
export default cartSlice;
