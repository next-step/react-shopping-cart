import { combineReducers } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { cartSlice } from 'store/feature/cart/cartSlice';
import { productSlice } from 'store/feature/product/productslice';
import dialogSlice from 'store/feature/dialog/dialogslice';
const persistConfig = {
  key: 'root',
  storage,
  blacklist: [''],
};

const cart = cartSlice.reducer;
const product = productSlice.reducer;
const dialog = dialogSlice.reducer;

export const rootReducer = combineReducers({
  cart,
  product,
  dialog,
});

export default persistReducer(persistConfig, rootReducer);
