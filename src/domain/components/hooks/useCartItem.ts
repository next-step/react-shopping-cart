import { useState } from 'react';
import type { CartProductType } from 'domain/types';
import { useCart } from 'common/hooks';

const MAX_NUMBER = 20;
const MIN_NUMBER = 1;

const useCartItem = (cartItem: CartProductType) => {
  const [inputNumber, setInputNumber] = useState(cartItem.amount);
  const { updateSeverCartItem } = useCart();

  const increaseInputNumber = () => {
    if (inputNumber === MAX_NUMBER) {
      alert('더이상 증가할수 없습니다!');
      return;
    }
    setInputNumber(inputNumber + 1);
    updateSeverCartItem({
      ...cartItem,
      amount: inputNumber + 1,
    });
  };

  const decreaseInputNumber = () => {
    if (inputNumber === MIN_NUMBER) {
      alert('더이상 감소할수 없습니다!');
      return;
    }
    setInputNumber(inputNumber - 1);
    updateSeverCartItem({
      ...cartItem,
      amount: inputNumber - 1,
    });
  };

  const updateCart = () => {
    updateSeverCartItem({ ...cartItem, isOrder: !cartItem.isOrder });
  };

  return { increaseInputNumber, decreaseInputNumber, inputNumber, updateCart };
};
export default useCartItem;
