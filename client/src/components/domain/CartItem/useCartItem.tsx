import { useState } from 'react';
import type { CartProductType } from 'types';
import { useCart } from 'hooks';

const MAX_NUMBER = 20;
const MIN_NUMBER = 1;

const useCartItem = (cartItem: CartProductType) => {
  const [inputNumber, setInputNumber] = useState(cartItem.amount);
  const { UpdateCart } = useCart();

  const increaseInputNumber = () => {
    if (inputNumber === MAX_NUMBER) {
      alert('더이상 증가할수 없습니다!');
      return;
    }
    setInputNumber(inputNumber + 1);
    UpdateCart({
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
    UpdateCart({
      ...cartItem,
      amount: inputNumber - 1,
    });
  };

  const updateCart = () => {
    UpdateCart({ ...cartItem, isOrder: !cartItem.isOrder });
  };

  return { increaseInputNumber, decreaseInputNumber, inputNumber, updateCart };
};
export default useCartItem;
