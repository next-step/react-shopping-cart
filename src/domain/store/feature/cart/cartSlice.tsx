import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { CartProductType, CartProductListType, StatusType } from 'domain/types';
import type { ThunkApiType } from 'store';
import { getData, postData, updateData } from 'common/utils/axios';
import { CartProductsSchema } from 'domain/schema';
import { reportError } from 'common/utils/error';

type CartStateType = {
  cartList: CartProductListType;
  selectedCartItem: CartProductType;
  status: StatusType;
  errorMessage: string;
};

const initialState: CartStateType = {
  cartList: [],
  selectedCartItem: { price: 0, image: '', name: '', id: 0, isOrder: false, amount: 0 },
  status: 'Loading',
  errorMessage: '',
};

const getCart = createAsyncThunk<CartProductListType, string, ThunkApiType>('getCart', async (url, thunkApi) => {
  try {
    const response = (await getData(url)) as CartProductListType;
    await CartProductsSchema.validate(response);
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(reportError(error));
  }
});

const deleteCartItem = createAsyncThunk<CartProductListType, CartProductType, ThunkApiType>(
  'deleteCart',
  async (data, thunkApi) => {
    try {
      const response = (await postData('/cart/delete', data)) as CartProductListType;
      await CartProductsSchema.validate(response);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(reportError(error));
    }
  }
);
const updateCart = createAsyncThunk<CartProductListType, CartProductType, ThunkApiType>(
  'updateCart',
  async (data, thunkApi) => {
    try {
      const response = (await updateData('/cart/update', data)) as CartProductListType;
      await CartProductsSchema.validate(response);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(reportError(error));
    }
  }
);

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
    builder.addCase(getCart.rejected, (state: CartStateType, action: PayloadAction<unknown>) => {
      state.status = 'Fail';
      state.errorMessage = action.payload as string;
    });

    builder.addCase(deleteCartItem.pending, (state: CartStateType) => {
      state.status = 'Loading';
    });
    builder.addCase(deleteCartItem.fulfilled, (state: CartStateType, action: PayloadAction<CartProductListType>) => {
      state.cartList = action.payload;
      state.status = 'Complete';
    });
    builder.addCase(deleteCartItem.rejected, (state: CartStateType, action: PayloadAction<unknown>) => {
      state.status = 'Fail';
      state.errorMessage = action.payload as string;
    });
    builder.addCase(updateCart.pending, (state: CartStateType) => {
      state.status = 'Loading';
    });

    builder.addCase(updateCart.fulfilled, (state: CartStateType, action: PayloadAction<CartProductListType>) => {
      state.cartList = action.payload;
      state.status = 'Complete';
    });
    builder.addCase(updateCart.rejected, (state: CartStateType, action: PayloadAction<unknown>) => {
      state.status = 'Fail';
      state.errorMessage = action.payload as string;
    });
  },
});
export { getCart, deleteCartItem, updateCart };

export const { selectCartItem } = cartSlice.actions;
