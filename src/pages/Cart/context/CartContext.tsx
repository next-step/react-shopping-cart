/* eslint-disable @typescript-eslint/no-empty-function */

import { CartWithQuantityAndChecked } from '@/types';
import { PropsWithChildren, createContext, useContext } from 'react';
import useCart from '../hooks/useCart';
import useFetchCartData from '../hooks/useFetchCartData';

type CartContextState<T> = {
  cartData: T;
} & ReturnType<typeof useCart>;

const CartContext = createContext<CartContextState<CartWithQuantityAndChecked[]>>({
  cartData: [],
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
  const { data } = useFetchCartData();
  const value = useCart({ initialData: data });

  return (
    <CartContext.Provider value={value} {...props}>
      {children}
    </CartContext.Provider>
  );
}

export { useCartContext, CartContextProvider };
