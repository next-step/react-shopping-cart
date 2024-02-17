import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { ProductListType, StatusType } from 'domain/types';
import { getProductItems } from 'common/utils/axios';
import { ProductsSchema } from 'domain/schema';
import type { ThunkApiType } from 'store';
import { reportError } from 'common/utils/error';

type ProductStateType = {
  productList: ProductListType;
  status: StatusType;
  errorMessage: string;
  selectedPage: number;
};

const initialState: ProductStateType = {
  productList: {
    products: [],
    TOTAL_PAGE: 0,
  },
  status: 'Loading',
  errorMessage: '',
  selectedPage: 1,
};

const getProductList = createAsyncThunk<ProductListType, number, ThunkApiType>('product', async (param, thunkApi) => {
  try {
    const response = await getProductItems(param);
    await ProductsSchema.validate(response);
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(reportError(error));
  }
});

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    handleSelectPage: (state: ProductStateType, action: PayloadAction<number>) => {
      state.selectedPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProductList.pending, (state: ProductStateType) => {
      state.status = 'Loading';
    });
    builder.addCase(getProductList.fulfilled, (state: ProductStateType, action: PayloadAction<ProductListType>) => {
      state.status = 'Complete';
      state.productList = action.payload;
    });
    builder.addCase(getProductList.rejected, (state: ProductStateType, action: PayloadAction<unknown>) => {
      state.status = 'Fail';
      state.errorMessage = action.payload as string;
    });
  },
});
export { getProductList };
export const { handleSelectPage } = productSlice.actions;
