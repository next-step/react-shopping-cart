import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { CartProductType, CartListType } from 'types';
import { getData, postData } from 'utils/fetch';

type CartStateType = {
  cartList: CartListType;
  addCartStatus: string;
};

const initialState: CartStateType = {
  cartList: [],
  addCartStatus: '',
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

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state: CartStateType, action: PayloadAction<CartProductType>) => {
      state.cartList = [...state.cartList, action.payload];
    },
    deleteProduct: (state: CartStateType, action: PayloadAction<number>) => {
      state.cartList = state.cartList.filter((product) => product.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addCart.fulfilled, (state: CartStateType, action: PayloadAction<string>) => {
      state.addCartStatus = action.payload;
    });
    builder.addCase(getCart.fulfilled, (state: CartStateType, action: PayloadAction<CartProductType[]>) => {
      state.cartList = action.payload;
    });
  },
});
export const { addProduct, deleteProduct } = cartSlice.actions;
export { addCart, getCart };
