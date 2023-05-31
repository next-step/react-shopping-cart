import { createContext, PropsWithChildren, useCallback, useMemo, useState } from 'react';

import { TItem } from '@/types/cart';

type InitValue = {
  items: TItem[];
  addItem: (product: TItem) => void;
  deleteItem: (id: number) => void;
};

const initValue: InitValue = {
  items: [],
  addItem: () => null,
  deleteItem: () => null,
};

export const CartContext = createContext(initValue);

export default function CartProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<TItem[]>([]);

  const deleteItem = useCallback(
    (id: number) => {
      const filteredItems = items.filter((item) => item.id !== id);
      setItems(filteredItems);
    },
    [items],
  );

  const addItem = useCallback(
    (value: TItem) => {
      const hasItemInCarts = items.findIndex((item) => item.id === value.id);

      if (hasItemInCarts > -1) {
        deleteItem(value.id);
        return;
      }

      setItems((prevItems) => [...prevItems, value]);
    },
    [items, deleteItem],
  );

  const contextValue = useMemo(() => ({ items, addItem, deleteItem }), [items, addItem, deleteItem]);

  return <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>;
}
