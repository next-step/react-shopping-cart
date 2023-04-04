import { CartList, CartWithQuantityAndChecked, ProductWithQuantity } from '@/types';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';
import {
  createCartListWithQuantityAndChecked,
  quantityCalc,
  toggleAllChecked,
  toggleOneChecked,
  getCheckedItems,
} from '../lib';
import type { QuantityButtonType } from '../lib';

interface UseCartProps {
  initialData: CartList;
}

function useCart({ initialData = [] }: UseCartProps) {
  const [items, setItems] = useState<CartWithQuantityAndChecked[]>(() => {
    return createCartListWithQuantityAndChecked(initialData);
  });

  const handleCheckList = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const id = Number(e.target.value);
    setItems(prevItems => toggleOneChecked(prevItems, id));
  }, []);

  const handleAllCheckCancel = useCallback(() => setItems(prevItems => toggleAllChecked(prevItems, false)), []);

  const handleAllCheck = useCallback(() => setItems(prevItems => toggleAllChecked(prevItems, true)), []);

  const handleQuantity = useCallback((id: string, type: QuantityButtonType) => {
    setItems(prevItems =>
      prevItems.map(cart =>
        cart.id === Number(id)
          ? {
              ...cart,
              product: { ...cart.product, quantity: quantityCalc(type, cart.product.quantity) },
            }
          : cart,
      ),
    );
  }, []);

  const totalPrice = useMemo(
    () =>
      getCheckedItems(items).reduce((acc, cur) => {
        return (acc += cur.product.price * cur.product.quantity);
      }, 0),
    [items],
  );

  const checkedListIds = useMemo(() => getCheckedItems(items).map(item => item.id), [items]);

  const isEmptyChecked = useMemo(() => getCheckedItems(items).length === 0, [items]);

  const isAllChecked = useMemo(
    () => items.length > 0 && items.every(item => item.product.checked),
    [items, initialData],
  );

  const onlyCheckedCartList = useMemo(
    () =>
      items.reduce((acc, cur) => {
        if (cur.product.checked) {
          return [
            ...acc,
            {
              id: cur.product.id,
              name: cur.product.name,
              imageUrl: cur.product.imageUrl,
              quantity: cur.product.quantity,
              price: cur.product.price,
            },
          ];
        }
        return acc;
      }, [] as ProductWithQuantity[]),
    [items],
  );

  useEffect(() => {
    setItems(prevItems => {
      const currentIds = initialData.map(item => item.id);
      const filteredPreviousItems = prevItems.filter(item => currentIds.includes(item.id));

      return filteredPreviousItems;
    });
  }, [initialData]);

  return {
    cartData: useMemo(() => items, [items]),
    handleCheckList,
    handleAllCheckCancel,
    handleAllCheck,
    isAllChecked,
    isEmptyChecked,
    checkedListIds,
    totalPrice,
    handleQuantity,
    onlyCheckedCartList,
  };
}

export default useCart;
