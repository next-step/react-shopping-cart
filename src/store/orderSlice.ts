import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { initialState, SliceState } from "./store";

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addToOrder: (order: SliceState, action: PayloadAction<number>) => {
      alert("Successfully added to the order list!");
      return;
    },
    removeFromOrder: (state, action: PayloadAction<number>) => {
      alert("Successfully removed from the order list!");
      return;
    },
    clearOrder: () => {
      return;
    },
  },
});

export const { addToOrder, removeFromOrder, clearOrder } = orderSlice.actions;
export default orderSlice;
