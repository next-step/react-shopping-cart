import { combineReducers } from '@reduxjs/toolkit';
import { cartReducer, productReducer, orderReducer } from 'domain/store/reducer';
import { dialogReducer } from 'common/store/reducer';

export const rootReducer = combineReducers({
  cartReducer,
  productReducer,
  orderReducer,
  dialogReducer,
});
