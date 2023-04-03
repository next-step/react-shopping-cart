/* eslint-disable @typescript-eslint/no-empty-function */

import { ResponseReturn } from '@/api';
import { CartList, CartWithQuantityAndChecked } from '@/types';
import { AxiosError } from 'axios';
import { PropsWithChildren, createContext, useContext, useMemo } from 'react';
import useSWR, { KeyedMutator } from 'swr';
import useCart from '../hooks/useCart';

type CartContextState<T, K> = {
  cartData: T;
  error: AxiosError | null;
  mutateCart: KeyedMutator<ResponseReturn<K>> | undefined;
  update: () => void;
} & ReturnType<typeof useCart>;

const CartContext = createContext<CartContextState<CartWithQuantityAndChecked[], CartList>>({
  cartData: [],
  error: null,
  mutateCart: undefined,
  handleCheckList: () => {},
  handleAllCheckCancel: () => {},
  handleAllCheck: () => {},
  isAllChecked: false,
  isEmptyChecked: false,
  checkedListIds: [],
  totalPrice: 0,
  handleQuantity: () => {},
  update: () => {},
  onlyCheckedCartList: [],
});

function useCartContext() {
  const value = useContext(CartContext);

  if (value === undefined || !value) {
    throw new Error('useCartContext는 CartContext안에서 사용되어야 합니다.');
  }

  return value;
}

function CartContextProvider({ children, ...props }: PropsWithChildren) {
  const { data, error, mutate: mutateCart } = useSWR<ResponseReturn<CartList>>('/carts');
  const cartList = data?.data || [];
  const {
    cartData,
    handleCheckList,
    handleAllCheckCancel,
    handleAllCheck,
    totalPrice,
    isAllChecked,
    isEmptyChecked,
    checkedListIds,
    handleQuantity,
    onlyCheckedCartList,
  } = useCart({ initialData: cartList, mutateCart });

  const update = () => {
    mutateCart();
  };

  const value = useMemo(
    () => ({
      cartData,
      error,
      mutateCart,
      handleCheckList,
      handleAllCheckCancel,
      handleAllCheck,
      totalPrice,
      isAllChecked,
      isEmptyChecked,
      checkedListIds,
      handleQuantity,
      update,
      onlyCheckedCartList,
    }),
    [
      cartData,
      error,
      mutateCart,
      handleCheckList,
      handleAllCheckCancel,
      handleAllCheck,
      totalPrice,
      isAllChecked,
      isEmptyChecked,
      checkedListIds,
      handleQuantity,
      update,
      cartData.length,
    ],
  );

  return (
    <CartContext.Provider value={value} {...props}>
      {children}
    </CartContext.Provider>
  );
}

export { useCartContext, CartContextProvider };
