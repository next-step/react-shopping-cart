import { combineReducers } from '@reduxjs/toolkit';

import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { cartSlice } from 'store/feature/cart/cartSlice';

const persistConfig = {
  key: 'root',
  storage,
  blacklist: [''],
};

const cart = cartSlice.reducer;

export const rootReducer = combineReducers({
  cart,
});

export default persistReducer(persistConfig, rootReducer);
