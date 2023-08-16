import { createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { TProduct } from '@/types/product';

type InitValue = {
  items: TProduct[];
  addItem: (product: TProduct) => void;
  deleteItem: (id: number) => void;
};

const initValue: InitValue = {
  items: [],
  addItem: () => null,
  deleteItem: () => null,
};

export const CartContext = createContext(initValue);

export default function CartProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<TProduct[]>([]);

  const deleteItem = useCallback((id: number) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const addItem = useCallback(
    (value: TProduct) => {
      const hasItemInCarts = items.find((item) => item.id === value.id);

      if (hasItemInCarts) {
        deleteItem(value.id);
        return;
      }

      setItems((prevItems) => [...prevItems, value]);
    },
    [items, deleteItem],
  );

  const contextValue = { items, addItem, deleteItem };

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}
