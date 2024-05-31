import { create } from 'zustand';
import { Cart, CartState, Product } from '../types';

export const useCartStore = create<CartState>()((set) => ({
  items: [],
  setItems: (items: Cart[]) => {
    const itemMap = new Map<Product['id'], Product>();

    items.forEach((item) => {
      const { id, name, price, imageUrl } = item.product;
      if (itemMap.has(id)) {
        const item = itemMap.get(id);
        item!.quantity = item!.quantity! + 1;
      } else {
        itemMap.set(id, { id, name, price, imageUrl, quantity: 1 });
      }
    });

    const newItems = Array.from(itemMap.values());

    return set({ items: newItems });
  },
  handleQuantity: (id: number, quantity: number) => {
    set((state) => {
      return {
        items: state.items.map((item) =>
          item.id === id ? { ...item, quantity } : item
        ),
      };
    });
  },
  selectedItems: new Set(),
  isAllSelected: false,
  toggleItemSelection: (id: number) => {
    set((state) => {
      const newSelectedItems = new Set(state.selectedItems);
      if (newSelectedItems.has(id)) {
        newSelectedItems.delete(id);
      } else {
        newSelectedItems.add(id);
      }
      return {
        selectedItems: newSelectedItems,
        isAllSelected: newSelectedItems.size === state.items.length,
      };
    });
  },
  toggleAllItemsSelection: () => {
    set((state) => {
      if (state.isAllSelected) {
        return { selectedItems: new Set(), isAllSelected: false };
      } else {
        const newSelectedItems = new Set(state.items.map(({ id }) => id));
        return { selectedItems: newSelectedItems, isAllSelected: true };
      }
    });
  },
}));
