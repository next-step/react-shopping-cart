import { createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { Carts } from '@/types/cart';
import { TProduct } from '@/types/product';
import { assert } from '@/utils/validation';

type InitValue = {
  carts: Carts;
  addCart: (product: TProduct) => void;
  deleteCart: (id: number) => void;
};

const initValue: InitValue = {
  carts: [],
  addCart: () => null,
  deleteCart: () => null,
};

export const CartContext = createContext(initValue);

export default function CartProvider({ children }: PropsWithChildren) {
  const [carts, setCarts] = useState<Carts>([]);

  const deleteCart = useCallback(
    (id: number) => {
      const filteredCarts = carts.filter((cart) => cart.id !== id);
      setCarts(filteredCarts);
    },
    [carts],
  );

  const addCart = useCallback(
    (product: TProduct) => {
      const hasProductInCarts = carts.findIndex((cart) => cart.id === product.id);
      if (hasProductInCarts > -1) {
        deleteCart(product.id);
        return;
      }

      setCarts((prevCart) => [...prevCart, product]);
    },
    [carts, deleteCart],
  );

  const contextValue = useMemo(() => ({ carts, addCart, deleteCart }), [addCart, carts, deleteCart]);

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}
