import { handleOpenDialog, handleDialogMessage } from 'common/store/feature/dialog/dialogslice';
import { handlePaymentApp, updateOrder } from 'domain/store/feature/order/orderSlice';
import type { CartProductType } from 'domain/types';
import { useAppDispatch, useAppSelector } from 'store';
import type { DialogType } from 'common/types';
import { useCart, useRouter } from 'common/hooks';
import { getData } from 'common/utils/axios';

const useDialog = () => {
  const { deleteOrderedCartItem, selectedCartItem, addCartItem } = useCart();
  const { push } = useRouter();
  const dispatch = useAppDispatch();
  const dialogStore = useAppSelector((state) => state.dialogReducer);
  const isOpenDialog = dialogStore.isOpen;
  const dialogTitle = dialogStore.message;
  const dialogType = dialogStore.type;

  const openDialog = () => {
    dispatch(handleOpenDialog(true));
  };

  const closeDialog = () => {
    dispatch(handleOpenDialog(false));
  };

  const setDialogUI = (type: DialogType) => {
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
    closeDialog();
    switch (dialogType) {
      case 'deleteCartItem':
        deleteOrderedCartItem();
        break;
      case 'addCartItem':
        const isValid = await addCartItem(selectedCartItem);
        return isValid ? alert('장바구니에 상품을 추가하였습니다!') : alert('장바구니에 이미 추가된 상품입니다');
      case 'orderCartItem':
        const cartItem = (await getData('/carts')) as CartProductType[];
        const orderItems = cartItem.filter((item) => {
          return item.isOrder === true;
        });
        dispatch(updateOrder(orderItems));
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
    openDialog,
    closeDialog,
    setDialogUI,
    handleConfirmButton,
  };
};
export default useDialog;
