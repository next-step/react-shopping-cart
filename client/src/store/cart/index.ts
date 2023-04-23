import { useCallback } from 'react';
import { create } from 'zustand';

import {
  decreaseCartCount,
  removeCartByIds,
  increaseCartCount,
  isCheckedAll,
  toggleCart,
  totalPriceOfCheckedCarts,
} from './model';

import { Carts, Cart } from 'types/cart';

type State = {
  carts: Carts;
  checked: Set<Cart>;
};

type Action = {
  actions: {
    initialize: (carts: Carts) => void;
    increase: (id: number) => void;
    decrease: (id: number) => void;
    remove: (ids: number[]) => void;
  };
};

export const useCartStore = create<State & Action>()((set) => ({
  carts: [],
  checked: new Set(),
  actions: {
    initialize: (carts: Carts) => set(() => ({ carts, checked: new Set() })),
    increase: (id: number) => set((state) => ({ carts: increaseCartCount(state.carts, id) })),
    decrease: (id: number) => set((state) => ({ carts: decreaseCartCount(state.carts, id) })),
    remove: (ids: number[]) =>
      set((state) => ({ carts: removeCartByIds(state.carts, ids), checked: new Set() })),
  },
}));

export const useCarts = () => useCartStore((state) => state.carts);
export const useCheckedCarts = () => useCartStore((state) => state.checked);

export const useIsCheckedAll = () =>
  useCartStore((state) => isCheckedAll(state.carts, state.checked));

export const useTotalPriceOfCheckedCarts = () =>
  useCartStore((state) => totalPriceOfCheckedCarts(state.checked));

export const useCartActions = () => {
  const actions = useCartStore((state) => state.actions);
  const checked = useCartStore((state) => state.checked);
  const carts = useCartStore((state) => state.carts);

  const toggle = useCallback(
    (cart: Cart) => {
      const newCheckedCarts = toggleCart(checked, cart);

      useCartStore.setState(() => ({ checked: newCheckedCarts }));
    },
    [checked]
  );

  const checkAll = useCallback(() => {
    useCartStore.setState(() => ({ checked: new Set(carts) }));
  }, [carts]);

  const uncheckAll = useCallback(() => {
    useCartStore.setState(() => ({ checked: new Set() }));
  }, []);

  return {
    ...actions,
    toggle,
    checkAll,
    uncheckAll,
  };
};
