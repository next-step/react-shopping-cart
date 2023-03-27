import { CART_PRODUCT_QUANTITY } from '@/constants';
import { CartWithProductQuantity } from '@/types';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';

export type QuantityButtonType = 'up' | 'down';

const quantityCalc = (type: QuantityButtonType, quantity: number) => {
  const { MIN, MAX } = CART_PRODUCT_QUANTITY;
  if (type === 'up') return quantity === MAX ? MAX : quantity + 1;
  if (type === 'down') return quantity === MIN ? MIN : quantity - 1;
  return 0;
};

interface UseCartProps {
  initialData: CartWithProductQuantity[];
}
function useCart({ initialData = [] }: UseCartProps) {
  const [cartData, setCartData] = useState<CartWithProductQuantity[]>(initialData);
  const [checkedList, setCheckedList] = useState<number[]>(initialData.map(cart => cart.id));

  const handleCheckList = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const id = Number(e.target.value);
    setCheckedList(prev => (prev.includes(id) ? prev.filter(existId => existId !== id) : [...prev, id]));
  }, []);

  const handleAllCheckCancel = useCallback(() => {
    setCheckedList([]);
  }, []);

  const handleAllCheck = useCallback(() => setCheckedList(cartData.map(cart => cart.id)), []);

  const handleQuantity = (id: string, type: QuantityButtonType) => {
    setCartData(prevCartData =>
      prevCartData.map(cart =>
        cart.id === Number(id)
          ? {
              ...cart,
              product: { ...cart.product, quantity: quantityCalc(type, cart.product.quantity) },
            }
          : cart,
      ),
    );
  };

  const handleDelete = () => {
    setCartData(prevCartData => prevCartData.filter(cart => !checkedList.includes(cart.id)));
    setCheckedList([]);
  };

  const totalPrice = useMemo(
    () =>
      cartData.reduce((acc, cur) => {
        if (checkedList.includes(cur.id)) {
          return (acc += cur.product.price * cur.product.quantity);
        }
        return (acc += 0);
      }, 0),
    [cartData, checkedList.length],
  );

  const isEmptyChecked = useMemo(() => checkedList.length === 0, [checkedList]);

  const isAllChecked = useMemo(
    () => !isEmptyChecked && cartData.every(cart => checkedList.includes(cart.id)),
    [checkedList, isEmptyChecked],
  );

  console.log(isAllChecked);

  return {
    cartData,
    checkedList,
    handleCheckList,
    handleAllCheckCancel,
    handleAllCheck,
    totalPrice,
    isAllChecked,
    isEmptyChecked,
    handleQuantity,
    handleDelete,
  };
}

export default useCart;
