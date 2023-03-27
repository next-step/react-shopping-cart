import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { DialogType, DialogMessage, CartProductType } from 'types';

type DialogStateType = {
  type: DialogType;
  isOpen: boolean;
  message: DialogMessage;
  product: CartProductType | '';
};

const initialState: DialogStateType = {
  type: '',
  isOpen: false,
  message: '',
  product: '',
};

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    handleProduct: (state: DialogStateType, action: PayloadAction<CartProductType>) => {
      state.product = action.payload;
    },
    handleDialogType: (state: DialogStateType, action: PayloadAction<DialogType>) => {
      state.type = action.payload;
    },
    handleOpenDialog: (state: DialogStateType, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    handleDialogMessage: (state: DialogStateType, action: PayloadAction<DialogMessage>) => {
      state.message = action.payload;
      state.isOpen = true;
    },
  },
});
export default dialogSlice;
export const { handleOpenDialog, handleDialogMessage, handleDialogType, handleProduct } = dialogSlice.actions;
