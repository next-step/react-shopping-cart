import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ProductType, StatusType } from 'types';
import { getProductItems } from 'utils/fetch';
import { ProductsSchema } from 'schema';

type ProductListType = {
  products: ProductType[];
  TOTAL_PAGE: number;
};
type ProductStateType = {
  productList: ProductListType;
  status: StatusType;
};

const initialState: ProductStateType = {
  productList: {
    products: [],
    TOTAL_PAGE: 0,
  },
  status: 'Loading',
};

const getProductList = createAsyncThunk('product', async (param: number, thunkApi: any) => {
  try {
    const response = await getProductItems(param);
    await ProductsSchema.validate(response);
    return response;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProductList.pending, (state: ProductStateType) => {
      state.status = 'Loading';
    });
    builder.addCase(getProductList.fulfilled, (state: ProductStateType, action: PayloadAction<ProductListType>) => {
      state.status = 'Complete';
      state.productList = action.payload;
    });
    builder.addCase(getProductList.rejected, (state) => {
      state.status = 'Fail';
    });
  },
});
export { getProductList };
