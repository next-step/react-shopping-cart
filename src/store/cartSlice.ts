/* eslint-disable no-console */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  quantity: number;
  isChecked: boolean;
};

export type ProductsState = {
  products: Product[];
  currentProduct: Product;
};

const initialState: ProductsState = {
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
  currentProduct: {
    id: 0,
    name: "",
    price: 0,
    imageUrl: "",
    quantity: 1,
    isChecked: false,
  },
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setCurrentProduct: (state, action: PayloadAction<Product>) => {
      state.currentProduct = action.payload;
    },
    addToCart: (state) => {
      const existingItem = state.products.find(
        (item) => item.id === state.currentProduct.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        state.products = [...state.products];
      } else if (state.products[0].id === 0) {
        state.products = [state.currentProduct];
      } else {
        state.products = [...state.products, state.currentProduct];
      }
    },
    deleteFromCart: (state, action: PayloadAction<number>) => {
      const existingItem = state.products.find(
        (item) => item.id === action.payload
      );
      if (existingItem) {
        state.products.length -= existingItem.quantity;
        state.products = state.products.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    deleteAll: (state) => {
      state.products = state.products.filter((item) => !item.isChecked);
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
    selectProduct: (state, action: PayloadAction<Product>) => {
      const selectedProduct = action.payload;
      const existingItem = state.products.find(
        (item) => item.id === selectedProduct.id
      );
      if (existingItem) {
        existingItem.isChecked = !existingItem.isChecked;
      }
    },
    selectAll: (state) => {
      state.products.map((product) => (product.isChecked = !product.isChecked));
    },
  },
});

export const {
  setCurrentProduct,
  addToCart,
  deleteFromCart,
  deleteAll,
  increaseQuantity,
  decreaseQuantity,
  selectProduct,
  selectAll,
} = cartSlice.actions;
export default cartSlice;
