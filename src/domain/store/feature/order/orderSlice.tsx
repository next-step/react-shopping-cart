import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { OrderProductType, OrderedItemsType, StatusType } from 'domain/types';
import { getData, postData } from 'common/utils/axios';
import { OrdersSchema } from 'domain/schema';
import type { ThunkApiType } from 'store';
import { reportError } from 'common/utils/error';

type OrderStateType = {
  orderedList: OrderedItemsType[];
  status: StatusType;
  errorMessage: string;
  isOpenPaymentApp: boolean;
};

const initialState: OrderStateType = {
  orderedList: [
    {
      id: 0,
      ordered: {
        items: [],
        totalAmount: 0,
        totalPrice: 0,
      },
    },
  ],
  status: 'Loading',
  errorMessage: '',
  isOpenPaymentApp: false,
};

const getOrder = createAsyncThunk<OrderedItemsType[], string, ThunkApiType>('getOrder', async (url, thunkApi) => {
  try {
    const response = (await getData(url)) as OrderedItemsType[];
    await OrdersSchema.validate(response);
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue(reportError(error));
  }
});

const updateOrder = createAsyncThunk<OrderedItemsType[], OrderProductType[], ThunkApiType>(
  'updateOrder',
  async (data, thunkApi) => {
    try {
      const response = (await postData('/order/update', data)) as OrderedItemsType[];
      await OrdersSchema.validate(response);
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(reportError(error));
    }
  }
);

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {
    handlePaymentApp: (state: OrderStateType, action: PayloadAction<boolean>) => {
      state.isOpenPaymentApp = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOrder.pending, (state: OrderStateType) => {
      state.status = 'Loading';
    });
    builder.addCase(getOrder.rejected, (state: OrderStateType, action: PayloadAction<unknown>) => {
      state.status = 'Fail';
      state.errorMessage = action.payload as string;
    });
    builder.addCase(getOrder.fulfilled, (state: OrderStateType, action: PayloadAction<OrderedItemsType[]>) => {
      state.orderedList = action.payload;
      state.status = 'Complete';
    });
    builder.addCase(updateOrder.fulfilled, (state: OrderStateType, action: PayloadAction<OrderedItemsType[]>) => {
      state.orderedList = action.payload;
      state.status = 'Complete';
    });
    builder.addCase(updateOrder.pending, (state: OrderStateType) => {
      state.status = 'Loading';
    });
    builder.addCase(updateOrder.rejected, (state: OrderStateType, action: PayloadAction<unknown>) => {
      state.status = 'Fail';
      state.errorMessage = action.payload as string;
    });
  },
});
export { getOrder, updateOrder };
export const { handlePaymentApp } = orderSlice.actions;
