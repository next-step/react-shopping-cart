import { useState } from 'react';
import type { CartProductType } from 'domain/types';
import { useCart } from 'domain/hooks';

const MAX_NUMBER = 20;
const MIN_NUMBER = 1;

const useCartItem = (cartItem: CartProductType) => {
  const [cartIteminput, setCartIteminput] = useState(cartItem.amount);
  const { updateCartItem } = useCart();

  const increaseCartItem = () => {
    if (cartIteminput === MAX_NUMBER) {
      alert('더이상 증가할수 없습니다!');
      return;
    }
    setCartIteminput(cartIteminput + 1);
    updateCartItem({
      ...cartItem,
      amount: cartIteminput + 1,
    });
  };

  const decreaseCartItem = () => {
    if (cartIteminput === MIN_NUMBER) {
      alert('더이상 감소할수 없습니다!');
      return;
    }
    setCartIteminput(cartIteminput - 1);
    updateCartItem({
      ...cartItem,
      amount: cartIteminput - 1,
    });
  };

  const updateOrder = () => {
    updateCartItem({ ...cartItem, isOrder: !cartItem.isOrder });
  };

  return { increaseCartItem, decreaseCartItem, cartIteminput, updateOrder };
};
export default useCartItem;
