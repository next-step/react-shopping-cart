import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { DialogType, DialogMessage } from 'common/types';

type DialogStateType = {
  type: DialogType;
  isOpen: boolean;
  message: DialogMessage;
};

const initialState: DialogStateType = {
  type: '',
  isOpen: false,
  message: '',
};

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    handleOpenDialog: (state: DialogStateType, action: PayloadAction<boolean>) => {
      state.isOpen = action.payload;
    },
    handleDialogMessage: (state: DialogStateType, action: PayloadAction<DialogMessage>) => {
      state.message = action.payload;
      switch (action.payload) {
        case '장바구니에 추가 하시겠습니까?':
          state.type = 'addCartItem';
          break;
        case '상품을 삭제하시겠습니까?':
          state.type = 'deleteCartItem';
          break;
        case '주문 하시겠습니까?':
          state.type = 'orderCartItem';
          break;
        case '결제 하시겠습니까?':
          state.type = 'paymentApp';
          break;
        default:
          break;
      }
      state.isOpen = true;
    },
  },
});
export default dialogSlice;
export const { handleOpenDialog, handleDialogMessage } = dialogSlice.actions;
