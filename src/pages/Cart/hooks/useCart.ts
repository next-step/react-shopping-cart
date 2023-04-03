import { CART_PRODUCT_QUANTITY } from '@/constants';
import { CartList, CartWithQuantityAndChecked, ProductWithQuantityAndChecked } from '@/types';
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from 'react';

export type QuantityButtonType = 'up' | 'down';

const quantityCalc = (type: QuantityButtonType, quantity: number) => {
  const { MIN, MAX } = CART_PRODUCT_QUANTITY;
  if (type === 'up') return quantity === MAX ? MAX : quantity + 1;
  if (type === 'down') return quantity === MIN ? MIN : quantity - 1;
  return 0;
};

interface UseCartProps {
  initialData: CartList;
}

function useCart({ initialData = [] }: UseCartProps) {
  const [items, setItems] = useState<CartWithQuantityAndChecked[]>(() => {
    return initialData.map(item => ({
      ...item,
      product: {
        ...item.product,
        quantity: 1,
        checked: true,
      },
    }));
  });

  const handleCheckList = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const id = Number(e.target.value);
    console.log(id);
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id
          ? {
              ...item,
              product: {
                ...item.product,
                checked: !item.product.checked,
              },
            }
          : item,
      ),
    );
  }, []);

  // TODO: 반복로직 분리
  const handleAllCheckCancel = useCallback(
    () =>
      setItems(prevItems =>
        prevItems.map(item => ({
          ...item,
          product: {
            ...item.product,
            checked: false,
          },
        })),
      ),
    [],
  );

  const handleAllCheck = useCallback(
    () =>
      setItems(prevItems =>
        prevItems.map(item => ({
          ...item,
          product: {
            ...item.product,
            checked: true,
          },
        })),
      ),
    [],
  );

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
      items
        .filter(item => item.product.checked)
        .reduce((acc, cur) => {
          return (acc += cur.product.price * cur.product.quantity);
        }, 0),
    [items],
  );

  const checkedListIds = useMemo(() => items.filter(item => item.product.checked).map(item => item.id), [items]);

  const isEmptyChecked = useMemo(() => items.filter(item => item.product.checked).length === 0, [items]);

  const isAllChecked = useMemo(
    () => items.length > 0 && items.every(item => item.product.checked),
    [items, initialData],
  );

  const onlyCheckedCartList = useMemo(
    () =>
      items.reduce((acc, cur) => {
        if (cur.product.checked) {
          return [...acc, cur.product];
        }
        return acc;
      }, [] as ProductWithQuantityAndChecked[]),
    [items],
  );

  useEffect(() => {
    setItems(
      initialData.map(item => ({
        ...item,
        product: {
          ...item.product,
          quantity: 1,
          checked: true,
        },
      })),
    );
  }, [initialData]);

  console.log('items', items);

  return {
    cartData: items,
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
