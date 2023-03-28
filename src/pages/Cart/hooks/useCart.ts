import { ResponseReturn } from '@/api';
import { CART_PRODUCT_QUANTITY } from '@/constants';
import { CartList, CartWithProductQuantity, ProductWithQuantity } from '@/types';
import { ChangeEvent, useCallback, useMemo, useState } from 'react';
import { KeyedMutator } from 'swr';

export type QuantityButtonType = 'up' | 'down';

const quantityCalc = (type: QuantityButtonType, quantity: number) => {
  const { MIN, MAX } = CART_PRODUCT_QUANTITY;
  if (type === 'up') return quantity === MAX ? MAX : quantity + 1;
  if (type === 'down') return quantity === MIN ? MIN : quantity - 1;
  return 0;
};

interface UseCartProps {
  initialData: CartWithProductQuantity[];
  mutateCart: KeyedMutator<ResponseReturn<CartList>> | undefined;
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

  const handleDeleteAllChecked = () => {
    setCartData(prevCartData => prevCartData.filter(cart => !checkedList.includes(cart.id)));
    setCheckedList([]);
  };

  const handleDeleteOneProduct = (id: number) => {
    setCartData(prevCartData => prevCartData.filter(cart => cart.id !== id));
    setCheckedList(prevCheckedList => prevCheckedList.filter(checkedId => checkedId !== id));
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

  const onlyCheckedCartList = useMemo(
    () =>
      cartData.reduce((acc, cur) => {
        if (checkedList.includes(cur.id)) {
          return [...acc, cur.product];
        }
        return acc;
      }, [] as ProductWithQuantity[]),
    [cartData, checkedList],
  );

  return {
    cartData,
    checkedList,
    handleCheckList,
    handleAllCheckCancel,
    handleAllCheck,
    isAllChecked,
    isEmptyChecked,
    totalPrice,
    handleQuantity,
    handleDeleteAllChecked,
    handleDeleteOneProduct,
    onlyCheckedCartList,
  };
}

export default useCart;
