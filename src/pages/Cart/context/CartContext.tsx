/* eslint-disable @typescript-eslint/no-empty-function */

import { CartWithQuantityAndChecked } from '@/types';
import { AxiosError } from 'axios';
import { PropsWithChildren, createContext, useContext, useMemo } from 'react';
import useCart from '../hooks/useCart';
import useCartData from '../hooks/useCartData';

type CartContextState<T> = {
  cartData: T;
  error: AxiosError | null;
} & ReturnType<typeof useCart>;

const CartContext = createContext<CartContextState<CartWithQuantityAndChecked[]>>({
  cartData: [],
  error: null,
  handleCheckList: () => {},
  handleAllCheckCancel: () => {},
  handleAllCheck: () => {},
  isAllChecked: false,
  isEmptyChecked: false,
  checkedListIds: [],
  totalPrice: 0,
  handleQuantity: () => {},
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
  const { data, error } = useCartData();
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
  } = useCart({ initialData: data });

  const value = useMemo(
    () => ({
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
      error,
    }),
    [
      data,
      cartData,
      handleCheckList,
      handleAllCheckCancel,
      handleAllCheck,
      totalPrice,
      isAllChecked,
      isEmptyChecked,
      checkedListIds,
      handleQuantity,
      cartData.length,
      error,
    ],
  );

  return (
    <CartContext.Provider value={value} {...props}>
      {children}
    </CartContext.Provider>
  );
}

export { useCartContext, CartContextProvider };
