import useFetch from '@/hooks/useFetch';
import { CartList, Product } from '@/types';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';

type ProductWithQuantity = Product & { quantity: number };

type CartWithQuantity = {
  id: number;
  product: ProductWithQuantity;
};

function useCart() {
  const { state } = useFetch<CartList>('/carts');

  const [carts, setCarts] = useState<CartWithQuantity[]>([]);
  const [checkedProductList, setCheckedProductList] = useState<number[]>([]);

  const handleCheckList = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const id = Number(e.target.value);
    setCheckedProductList(prev => (prev.includes(id) ? prev.filter(existId => existId !== id) : [...prev, id]));
  }, []);

  const handleCheckAllList = useCallback(() => {
    setCheckedProductList([]);
    // setCheckedProductList(carts?.map(cart => cart.id) ?? [])
  }, []);

  useEffect(() => {
    setCarts(state?.data?.map(cart => ({ ...cart, product: { ...cart.product, quantity: 1 } })) ?? []);
    setCheckedProductList(state?.data?.map(cart => cart.id) ?? []);
  }, [state?.data]);

  // acc += cur.product.price * cur.product.quantity
  const totalPrice = useMemo(
    () =>
      carts.reduce((acc, cur) => {
        if (checkedProductList.includes(cur.id)) {
          return (acc += cur.product.price * cur.product.quantity);
        }
        return (acc += 0);
      }, 0),
    [carts, checkedProductList.length],
  );

  return {
    carts,
    checkedProductList,
    handleCheckList,
    handleCheckAllList,
    totalPrice,
  };
}

export default useCart;
