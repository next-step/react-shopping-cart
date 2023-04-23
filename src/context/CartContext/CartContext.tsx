import React, { useContext, useMemo } from 'react';
import { createContext } from 'react';
import { ICart } from '../../types/types';
import useCartDataHandlers, { TCartDataHandlers } from './hooks/useCartDataHandlers';

const CartContext = createContext<ICart | null>(null);
const CartDataHandlingContext = createContext<TCartDataHandlers | null>(null);

export function CartContextProvider({ children }: { children: React.ReactNode }) {
  const { cart, cartDataHandlers } = useCartDataHandlers();

  return (
    <CartContext.Provider value={cart}>
      <CartDataHandlingContext.Provider value={cartDataHandlers}>{children}</CartDataHandlingContext.Provider>
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const cart = useContext(CartContext);
  const cartDataHandlers = useContext(CartDataHandlingContext);

  if (cart === null || cartDataHandlers === null) {
    throw new Error('장바구니와 관련된 설정을 코드에서 초기화하지 않았습니다.');
  }

  const checkedProducts = useMemo(() => cart.products.filter(({ checked }) => checked), [cart]);
  const allChecked = useMemo(() => cart.products.every(({ checked }) => !!checked), [cart]);

  const estimatedPrice = useMemo(
    () =>
      cart.products.reduce((result, { checked, price, amount = 1 }) => (checked ? result + price * amount : result), 0),
    [cart]
  );

  return { cart, cartDataHandlers, checkedProducts, allChecked, estimatedPrice };
}
