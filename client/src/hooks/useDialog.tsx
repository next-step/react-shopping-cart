import {
  handleOpenDialog,
  handleDialogMessage,
  handleDialogType,
  handleProduct,
} from 'store/feature/dialog/dialogslice';
import { useAppDispatch, useAppSelector } from 'store';
import type { DialogType, CartProductType } from 'types';
import { useCart } from 'hooks';

const useDialog = () => {
  const { DeleteCart, DeleteCheckedCart } = useCart();
  const dispatch = useAppDispatch();
  const dialogStore = useAppSelector((state) => state.dialog);
  const isOpenDialog = dialogStore.isOpen;
  const dialogTitle = dialogStore.message;
  const dialogType = dialogStore.type;
  const dialogProduct = dialogStore.product;

  const handleOpenDialogUI = (isOpen: boolean) => {
    dispatch(handleOpenDialog(isOpen));
  };
  const handleDialogUIMessage = (type: DialogType) => {
    switch (type) {
      case 'deleteCart':
        dispatch(handleDialogMessage('상품을 삭제하시겠습니까?'));
        dispatch(handleDialogType('deleteCart'));
        break;
      case 'deleteCheckCart':
        dispatch(handleDialogMessage('체크된 상품을 삭제하시겠습니까?'));
        dispatch(handleDialogType('deleteCheckCart'));
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
      case 'deleteCart':
        if (dialogProduct === '') return;
        DeleteCart(dialogProduct);
        break;
      case 'deleteCheckCart':
        DeleteCheckedCart();
        break;
      default:
        break;
    }
  };

  return {
    isOpenDialog,
    dialogTitle,
    handleOpenDialogUI,
    handleDialogUIMessage,
    handleConfirmButton,
    selectProduct,
  };
};
export default useDialog;
