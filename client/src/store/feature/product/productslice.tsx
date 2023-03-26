import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ProductType } from 'types';
import { sendRequest } from 'utils/fetch';

type ProductStateType = {
  productList: ProductType[];
  status: 'Loading' | 'Complete' | 'Fail';
};

const fetchProductList = createAsyncThunk('product', async (url: string, thunkApi: any) => {
  try {
    const response = await sendRequest(url);
    return response.products;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

const initialState: ProductStateType = {
  productList: [],
  status: 'Loading',
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProductList.pending, (state: ProductStateType) => {
      state.status = 'Loading';
    });
    builder.addCase(fetchProductList.fulfilled, (state: ProductStateType, action: PayloadAction<ProductType[]>) => {
      state.status = 'Complete';
      state.productList = action.payload;
    });
    builder.addCase(fetchProductList.rejected, (state) => {
      state.status = 'Fail';
    });
  },
});
export { fetchProductList };
