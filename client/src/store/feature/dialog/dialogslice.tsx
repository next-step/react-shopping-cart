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
    handleOpenDialog: (state: DialogStateType, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    handleDialogMessage: (state: DialogStateType, action: PayloadAction<DialogMessage>) => {
      state.message = action.payload;
      switch (action.payload) {
        case '장바구니로 이동하시겠습니까?':
          state.type = 'moveCartPage';
          break;
        case '상품을 삭제하시겠습니까?':
          state.type = 'deleteCheckedCartItem';
          break;
        case '주문 하시겠습니까?':
          state.type = 'orderCartItem';
          break;
        case '결제 하시겠습니까?':
          state.type = 'payment';
          break;
        default:
          break;
      }
      state.isOpen = true;
    },
  },
});
export default dialogSlice;
export const { handleOpenDialog, handleDialogMessage, handleProduct } = dialogSlice.actions;
