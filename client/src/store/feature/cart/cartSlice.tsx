import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ProductType, CartListType } from 'types';

type CartStateType = {
  cartList: CartListType;
};

const initialState: CartStateType = {
  cartList: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state: CartStateType, action: PayloadAction<ProductType>) => {
      state.cartList = [...state.cartList, action.payload];
    },
  },
});
export const { addProduct } = cartSlice.actions;
