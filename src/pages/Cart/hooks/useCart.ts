import { ResponseReturn } from '@/api';
import { CART_PRODUCT_QUANTITY } from '@/constants';
import { CartList, CartWithQuantityAndChecked, ProductWithQuantityAndChecked } from '@/types';
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
  initialData: CartList;
  mutateCart: KeyedMutator<ResponseReturn<CartList>> | undefined;
}
function useCart({ initialData = [] }: UseCartProps) {
  const [cartData, setCartData] = useState<CartWithQuantityAndChecked[]>(() => {
    return initialData.map(cart => ({
      ...cart,
      product: {
        ...cart.product,
        quantity: 1,
        checked: true,
      },
    }));
  });

  const handleCheckList = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const id = Number(e.target.value);
    setCartData(prevItems =>
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
      setCartData(prevItems =>
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
      setCartData(prevItems =>
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

  const totalPrice = useMemo(
    () =>
      cartData
        .filter(item => item.product.checked)
        .reduce((acc, cur) => {
          return (acc += cur.product.price * cur.product.quantity);
        }, 0),
    [cartData],
  );

  const isEmptyChecked = useMemo(() => cartData.filter(item => item.product.checked).length === 0, [cartData]);

  const isAllChecked = useMemo(() => cartData.every(item => item.product.checked), [cartData, isEmptyChecked]);

  const checkedListIds = useMemo(() => cartData.filter(item => item.product.checked).map(item => item.id), [cartData]);

  const onlyCheckedCartList = useMemo(
    () =>
      cartData.reduce((acc, cur) => {
        if (cur.product.checked) {
          return [...acc, cur.product];
        }
        return acc;
      }, [] as ProductWithQuantityAndChecked[]),
    [cartData],
  );

  return {
    cartData,
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
