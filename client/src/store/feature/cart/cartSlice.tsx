import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { CartProductType, CartListType } from 'types';
import { getData, postData, updateData } from 'utils/fetch';

type CartStateType = {
  cartList: CartListType;
};

const initialState: CartStateType = {
  cartList: [],
};

const addCart = createAsyncThunk('addCart', async (data: CartProductType, thunkApi: any) => {
  try {
    const response = await postData('/carts', data);
    return response;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

const getCart = createAsyncThunk('getCart', async (url: string, thunkApi: any) => {
  try {
    const response = await getData(url);
    return response;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

const deleteCart = createAsyncThunk('deleteCart', async (data: CartProductType, thunkApi: any) => {
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
    builder.addCase(getCart.fulfilled, (state: CartStateType, action: PayloadAction<CartProductType[]>) => {
      state.cartList = action.payload;
    });
    builder.addCase(deleteCart.fulfilled, (state: CartStateType, action: PayloadAction<CartProductType[]>) => {
      state.cartList = action.payload;
    });
    builder.addCase(updateCart.fulfilled, (state: CartStateType, action: PayloadAction<CartProductType[]>) => {
      state.cartList = action.payload;
    });
  },
});
export { addCart, getCart, deleteCart, updateCart };
