import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ProductListType, StatusType } from 'domain/types';
import { getProductItems } from 'common/utils/axios';
import { ProductsSchema } from 'domain/schema';
import type { ThunkApiType } from 'store';

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

const getProductList = createAsyncThunk<ProductListType, number, ThunkApiType>('product', async (param, thunkApi) => {
  try {
    const response = await getProductItems(param);
    await ProductsSchema.validate(response);
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue('데이터를 가져오는데 실패하였습니다 !');
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
    builder.addCase(getProductList.rejected, (state: ProductStateType) => {
      state.status = 'Fail';
    });
  },
});
export { getProductList };
