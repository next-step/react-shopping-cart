import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { OrderedItemType, OrderedItemsType } from 'types';
import { getData, postData } from 'utils/fetch';

type OrderStateType = {
  orderedList: OrderedItemsType[];
};

const initialState: OrderStateType = {
  orderedList: [
    {
      id: 0,
      ordered: {
        item: [],
        totalAmount: 0,
        totalPrice: 0,
      },
    },
  ],
};

const getOrder = createAsyncThunk('getOrder', async (url: string, thunkApi: any) => {
  try {
    const response = await getData(url);
    return response;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

const updateOrder = createAsyncThunk('updateOrder', async (data: OrderedItemType, thunkApi: any) => {
  try {
    const response = (await postData('/order/update', data)) as any;
    return response.data;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

export const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getOrder.fulfilled, (state: OrderStateType, action: PayloadAction<OrderedItemsType[]>) => {
      state.orderedList = action.payload;
    });
    builder.addCase(updateOrder.fulfilled, (state: OrderStateType, action: PayloadAction<OrderedItemsType[]>) => {
      state.orderedList = action.payload;
    });
  },
});
export { getOrder, updateOrder };
