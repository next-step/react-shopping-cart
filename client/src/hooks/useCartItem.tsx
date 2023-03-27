import { useState } from 'react';
import useCart from './useCart';
import type { CartProductType } from 'types';
import { useDialog } from 'hooks';

const useCartItemInputNumber = (cartItem: CartProductType) => {
  const [inputNumber, setInputNumber] = useState(cartItem.amount);
  const { UpdateCart } = useCart();
  const { showDialogUI, selectProduct } = useDialog();
  const handleIncreaseButton = () => {
    if (inputNumber === 20) {
      alert('더이상 증가할수 없습니다!');
      return;
    }
    setInputNumber(inputNumber + 1);
    UpdateCart({
      ...cartItem,
      amount: inputNumber + 1,
    });
  };
  const handleDecreaseButton = () => {
    if (inputNumber === 1) {
      alert('더이상 감소할수 없습니다!');
      return;
    }
    setInputNumber(inputNumber - 1);
    UpdateCart({
      ...cartItem,
      amount: inputNumber - 1,
    });
  };
  const handleRemoveButton = () => {
    showDialogUI('deleteCart');
    selectProduct(cartItem);
  };
  const handleCheckBox = () => {
    UpdateCart({ ...cartItem, isOrder: !cartItem.isOrder });
  };

  return { handleIncreaseButton, handleDecreaseButton, inputNumber, handleRemoveButton, handleCheckBox };
};
export default useCartItemInputNumber;
