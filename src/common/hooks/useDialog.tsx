import { handleOpenDialog, handleDialogMessage } from 'store/feature/dialog/dialogslice';
import { handlePaymentApp } from 'store/feature/order/orderSlice';

import { useAppDispatch, useAppSelector } from 'store';
import type { DialogType } from 'types';
import { useCart, useRouter } from 'common/hooks';

const useDialog = () => {
  const { deleteServerCartItem, selectedCartItem, addServerCartItem } = useCart();
  const { push } = useRouter();
  const dispatch = useAppDispatch();
  const dialogStore = useAppSelector((state) => state.dialog);
  const isOpenDialog = dialogStore.isOpen;
  const dialogTitle = dialogStore.message;
  const dialogType = dialogStore.type;

  const handleDialogUI = (isOpen: boolean) => {
    dispatch(handleOpenDialog(isOpen));
  };
  const showDialogUI = (type: DialogType) => {
    switch (type) {
      case 'deleteCartItem':
        dispatch(handleDialogMessage('상품을 삭제하시겠습니까?'));
        break;
      case 'addCartItem':
        dispatch(handleDialogMessage('장바구니에 추가 하시겠습니까?'));
        break;
      case 'orderCartItem':
        dispatch(handleDialogMessage('주문 하시겠습니까?'));
        break;
      case 'payment':
        dispatch(handleDialogMessage('결제 하시겠습니까?'));
        break;
      default:
        break;
    }
  };

  const handleConfirmButton = async () => {
    handleDialogUI(false);
    switch (dialogType) {
      case 'deleteCartItem':
        deleteServerCartItem();
        break;
      case 'addCartItem':
        const isValid = await addServerCartItem(selectedCartItem);
        return isValid ? alert('장바구니에 상품을 추가하였습니다!') : alert('장바구니에 이미 추가된 상품입니다');
      case 'orderCartItem':
        push('/order');
        break;
      case 'payment':
        dispatch(handlePaymentApp(true));
        break;
      default:
        break;
    }
  };

  return {
    isOpenDialog,
    dialogTitle,
    handleDialogUI,
    showDialogUI,
    handleConfirmButton,
  };
};
export default useDialog;
