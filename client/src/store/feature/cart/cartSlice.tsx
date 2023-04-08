import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { CartProductType, CartProductListType } from 'types';

import { getData, postData, updateData } from 'utils/fetch';

type CartStateType = {
  cartList: CartProductListType;
  selectedCartItem: CartProductType;
};

const initialState: CartStateType = {
  cartList: [],
  selectedCartItem: { price: 0, image: '', name: '', id: 0, isOrder: false, amount: 0 },
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
  reducers: {
    selectCartItem: (state: CartStateType, action: PayloadAction<CartProductType>) => {
      state.selectedCartItem = action.payload;
    },
  },
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

export const { selectCartItem } = cartSlice.actions;
