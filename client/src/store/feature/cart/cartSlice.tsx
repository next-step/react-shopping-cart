import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { CartProductType, CartProductListType, StatusType } from 'types';
import { getData, postData, updateData } from 'utils/fetch';
import { CartProductsSchema } from 'schema';

type CartStateType = {
  cartList: CartProductListType;
  selectedCartItem: CartProductType;
  status: StatusType;
};

const initialState: CartStateType = {
  cartList: [],
  selectedCartItem: { price: 0, image: '', name: '', id: 0, isOrder: false, amount: 0 },
  status: 'Loading',
};

const getCart = createAsyncThunk('getCart', async (url: string, thunkApi: any) => {
  try {
    const response = await getData(url);
    await CartProductsSchema.validate(response); //서버로부터 온 데이터가 validate하지 않으면 error로 이동
    return response;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

const deleteCartItem = createAsyncThunk('deleteCart', async (data: CartProductType, thunkApi: any) => {
  try {
    const response = await postData('/cart/delete', data);
    await CartProductsSchema.validate(response.data); //서버로부터 온 데이터가 validate하지 않으면 error로 이동
    return response.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});
const updateCart = createAsyncThunk('updateCart', async (data: CartProductType, thunkApi: any) => {
  try {
    const response = await updateData('/cart/update', data);
    await CartProductsSchema.validate(response.data); //서버로부터 온 데이터가 validate하지 않으면 error로 이동
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
    builder.addCase(getCart.pending, (state: CartStateType) => {
      state.status = 'Loading';
    });
    builder.addCase(getCart.fulfilled, (state: CartStateType, action: PayloadAction<CartProductListType>) => {
      state.cartList = action.payload;
      state.status = 'Complete';
    });
    builder.addCase(getCart.rejected, (state: CartStateType) => {
      state.status = 'Fail';
    });

    builder.addCase(deleteCartItem.pending, (state: CartStateType) => {
      state.status = 'Loading';
    });
    builder.addCase(deleteCartItem.fulfilled, (state: CartStateType, action: PayloadAction<CartProductListType>) => {
      state.cartList = action.payload;
      state.status = 'Complete';
    });
    builder.addCase(deleteCartItem.rejected, (state: CartStateType) => {
      state.status = 'Fail';
    });
    builder.addCase(updateCart.pending, (state: CartStateType) => {
      state.status = 'Loading';
    });

    builder.addCase(updateCart.fulfilled, (state: CartStateType, action: PayloadAction<CartProductListType>) => {
      state.cartList = action.payload;
      state.status = 'Complete';
    });
    builder.addCase(updateCart.rejected, (state: CartStateType) => {
      state.status = 'Fail';
    });
  },
});
export { getCart, deleteCartItem, updateCart };

export const { selectCartItem } = cartSlice.actions;
