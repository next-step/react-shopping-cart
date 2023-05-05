import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';
import type { OrderProductType, OrderedItemsType, StatusType } from 'domain/types';
import { getData, postData } from 'common/utils/axios';
import { OrdersSchema } from 'domain/schema';
import type { ThunkApiType } from 'store';
type OrderStateType = {
  orderedList: OrderedItemsType[];
  status: StatusType;
  statusMessage: string;
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
  statusMessage: '',
  isOpenPaymentApp: false,
};

const getOrder = createAsyncThunk<OrderedItemsType[], string, ThunkApiType>('getOrder', async (url, thunkApi) => {
  try {
    const response = (await getData(url)) as OrderedItemsType[];
    await OrdersSchema.validate(response);
    return response;
  } catch (error) {
    return thunkApi.rejectWithValue('데이터를 가져오는데 실패하였습니다 !');
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
      return thunkApi.rejectWithValue('데이터를 가져오는데 실패하였습니다 !');
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
