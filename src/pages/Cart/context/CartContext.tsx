/* eslint-disable @typescript-eslint/no-empty-function */

import { ResponseReturn } from '@/api';
import { CartList, CartWithProductQuantity } from '@/types';
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

const CartContext = createContext<CartContextState<CartWithProductQuantity[], CartList>>({
  cartData: [],
  error: null,
  mutateCart: undefined,
  checkedList: [],
  handleCheckList: () => {},
  handleAllCheckCancel: () => {},
  handleAllCheck: () => {},
  isAllChecked: false,
  isEmptyChecked: false,
  totalPrice: 0,
  handleQuantity: () => {},
  handleDeleteAllChecked: () => {},
  handleDeleteOneProduct: () => {},
  update: () => {},
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
  const cartListWithQuantity = data?.data?.map(cart => ({ ...cart, product: { ...cart.product, quantity: 1 } })) || [];
  const {
    cartData,
    checkedList,
    handleCheckList,
    handleAllCheckCancel,
    handleAllCheck,
    totalPrice,
    isAllChecked,
    isEmptyChecked,
    handleQuantity,
    handleDeleteAllChecked,
    handleDeleteOneProduct,
  } = useCart({ initialData: cartListWithQuantity, mutateCart });

  const update = () => {
    mutateCart();
  };

  const value = useMemo(
    () => ({
      cartData,
      error,
      mutateCart,
      checkedList,
      handleCheckList,
      handleAllCheckCancel,
      handleAllCheck,
      totalPrice,
      isAllChecked,
      isEmptyChecked,
      handleQuantity,
      handleDeleteAllChecked,
      handleDeleteOneProduct,
      update,
    }),
    [
      cartData,
      error,
      mutateCart,
      checkedList,
      handleCheckList,
      handleAllCheckCancel,
      handleAllCheck,
      totalPrice,
      isAllChecked,
      isEmptyChecked,
      handleQuantity,
      handleDeleteAllChecked,
      handleDeleteOneProduct,
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
