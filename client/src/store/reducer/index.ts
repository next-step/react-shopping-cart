import { combineReducers } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { cartSlice } from 'store/feature/cart/cartSlice';
import { productSlice } from 'store/feature/product/productslice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [''],
};

const cart = cartSlice.reducer;
const product = productSlice.reducer;

export const rootReducer = combineReducers({
  cart,
  product,
});

export default persistReducer(persistConfig, rootReducer);
