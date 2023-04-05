import { handleOpenDialog, handleDialogMessage, handleProduct } from 'store/feature/dialog/dialogslice';
import { useAppDispatch, useAppSelector } from 'store';
import type { DialogType, CartProductType } from 'types';
import { useCart, useRouter } from 'hooks';

const useDialog = () => {
  const { DeleteCartItem } = useCart();
  const { push } = useRouter();

  const dispatch = useAppDispatch();
  const dialogStore = useAppSelector((state) => state.dialog);
  const isOpenDialog = dialogStore.isOpen;
  const dialogTitle = dialogStore.message;
  const dialogType = dialogStore.type;

  const handleOpenDialogUI = (isOpen: boolean) => {
    dispatch(handleOpenDialog(isOpen));
  };
  const showDialogUI = (type: DialogType) => {
    switch (type) {
      case 'deleteCheckedCartItem':
        dispatch(handleDialogMessage('상품을 삭제하시겠습니까?'));
        break;
      case 'moveCartPage':
        dispatch(handleDialogMessage('장바구니로 이동하시겠습니까?'));
        break;
      case 'orderCartItem':
        dispatch(handleDialogMessage('주문 하시겠습니까?'));
        break;
      default:
        break;
    }
  };
  const selectProduct = (product: CartProductType) => {
    dispatch(handleProduct(product));
  };

  const handleConfirmButton = () => {
    handleOpenDialogUI(false);
    switch (dialogType) {
      case 'deleteCheckedCartItem':
        DeleteCartItem();
        break;
      case 'moveCartPage':
        alert('장바구니에 상품을 추가하였습니다!');
        push('/carts');
        break;
      case 'orderCartItem':
        DeleteCartItem();
        push('/order');
        break;
      default:
        break;
    }
  };

  return {
    isOpenDialog,
    dialogTitle,
    handleOpenDialogUI,
    showDialogUI,
    handleConfirmButton,
    selectProduct,
  };
};
export default useDialog;
