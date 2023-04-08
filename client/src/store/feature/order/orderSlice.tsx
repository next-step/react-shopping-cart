import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { OrderProductType, OrderedItemsType, StatusType } from 'types';
import { getData, postData } from 'utils/fetch';

type OrderStateType = {
  orderedList: OrderedItemsType[];
  status: StatusType;
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
};

const getOrder = createAsyncThunk('getOrder', async (url: string, thunkApi: any) => {
  try {
    const response = await getData(url);
    return response;
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

const updateOrder = createAsyncThunk('updateOrder', async (data: OrderProductType[], thunkApi: any) => {
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
