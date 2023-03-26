import { useState } from 'react';
import useCart from './useCart';
import type { CartProductType } from 'types';

const useCartInputNumber = (amount: number) => {
  const [inputNumber, setInputNumber] = useState(amount);
  const { UpdateCart } = useCart();

  const increaseNumber = (product: CartProductType) => {
    if (inputNumber === 20) {
      alert('더이상 증가할수 없습니다!');
      return;
    }
    setInputNumber(inputNumber + 1);
    UpdateCart({
      ...product,
      amount: inputNumber + 1,
    });
  };
  const decreaseNumber = (product: CartProductType) => {
    if (inputNumber === 1) {
      alert('더이상 감소할수 없습니다!');
      return;
    }
    setInputNumber(inputNumber - 1);
    UpdateCart({
      ...product,
      amount: inputNumber - 1,
    });
  };

  return { increaseNumber, decreaseNumber, inputNumber };
};
export default useCartInputNumber;
