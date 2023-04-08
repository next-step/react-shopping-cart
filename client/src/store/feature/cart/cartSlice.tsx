import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { CartProductType, CartProductListType } from 'types';

import { getData, postData, updateData } from 'utils/fetch';

type CartStateType = {
  cartList: CartProductListType;
};

const initialState: CartStateType = {
  cartList: [],
};

const getCart = createAsyncThunk('getCart', async (url: string, thunkApi: any) => {
  try {
    const response = await getData(url);
    return response;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

const deleteCartItem = createAsyncThunk('deleteCart', async (data: CartProductType, thunkApi: any) => {
  try {
    const response = (await postData('/cart/delete', data)) as any;
    return response.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});
const updateCart = createAsyncThunk('updateCart', async (data: CartProductType, thunkApi: any) => {
  try {
    const response = (await updateData('/cart/update', data)) as any;
    return response.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCart.fulfilled, (state: CartStateType, action: PayloadAction<CartProductListType>) => {
      state.cartList = action.payload;
    });
    builder.addCase(deleteCartItem.fulfilled, (state: CartStateType, action: PayloadAction<CartProductListType>) => {
      state.cartList = action.payload;
    });
    builder.addCase(updateCart.fulfilled, (state: CartStateType, action: PayloadAction<CartProductListType>) => {
      state.cartList = action.payload;
    });
  },
});
export { getCart, deleteCartItem, updateCart };
