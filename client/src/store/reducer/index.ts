import { combineReducers } from '@reduxjs/toolkit';

import { cartSlice } from 'store/feature/cart/cartSlice';
import { productSlice } from 'store/feature/product/productslice';
import dialogSlice from 'store/feature/dialog/dialogslice';
import { orderSlice } from 'store/feature/order/orderSlice';

const cart = cartSlice.reducer;
const product = productSlice.reducer;
const dialog = dialogSlice.reducer;
const order = orderSlice.reducer;

export const rootReducer = combineReducers({
  cart,
  product,
  dialog,
  order,
});
