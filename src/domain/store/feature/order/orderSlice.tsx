import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { OrderProductType, OrderedItemsType, StatusType } from 'domain/types';
import { getData, postData } from 'common/utils/axios';
import { OrdersSchema } from 'domain/schema';

type OrderStateType = {
  orderedList: OrderedItemsType[];
  status: StatusType;
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
  isOpenPaymentApp: false,
};

const getOrder = createAsyncThunk('getOrder', async (url: string, thunkApi: any) => {
  try {
    const response = await getData(url);
    await OrdersSchema.validate(response);
    return response;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

const updateOrder = createAsyncThunk('updateOrder', async (data: OrderProductType[], thunkApi: any) => {
  try {
    const response = await postData('/order/update', data);

    await OrdersSchema.validate(response.data);
    return response.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

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
    builder.addCase(getOrder.rejected, (state: OrderStateType) => {
      state.status = 'Fail';
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
    builder.addCase(updateOrder.rejected, (state: OrderStateType) => {
      state.status = 'Fail';
    });
  },
});
export { getOrder, updateOrder };
export const { handlePaymentApp } = orderSlice.actions;
