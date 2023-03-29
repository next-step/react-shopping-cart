import { create } from 'zustand';

import {
  checkAllCart,
  decreaseCartCount,
  idsOfCheckedCarts,
  increaseCartCount,
  initializeCarts,
  isCheckedAll,
  isCheckedCart,
  toggleCart,
  totalCountOfCheckedCarts,
  totalPriceOfCheckedCarts,
  uncheckAllCart,
} from './model';

import { CheckableCart } from './types';
import { Carts } from 'types/cart';

type State = {
  carts: CheckableCart[];
};

type Action = {
  actions: {
    initialize: (carts: Carts) => void;
    increase: (id: number) => void;
    decrease: (id: number) => void;
    toggle: (id: number) => void;
    checkAll: () => void;
    uncheckAll: () => void;
  };
};

export const useCartStore = create<State & Action>()((set) => ({
  carts: [],
  actions: {
    initialize: (carts: Carts) => set(() => ({ carts: initializeCarts(carts) })),
    increase: (id: number) => set((state) => ({ carts: increaseCartCount(state.carts, id) })),
    decrease: (id: number) => set((state) => ({ carts: decreaseCartCount(state.carts, id) })),
    toggle: (id: number) => set((state) => ({ carts: toggleCart(state.carts, id) })),
    checkAll: () => set((state) => ({ carts: checkAllCart(state.carts) })),
    uncheckAll: () => set((state) => ({ carts: uncheckAllCart(state.carts) })),
  },
}));

export const useCartActions = () => useCartStore((state) => state.actions);
export const useCartsState = () => useCartStore((state) => state.carts);

export const useIdsOfCheckedCarts = () => useCartStore((state) => idsOfCheckedCarts(state.carts));

export const useIsCheckedCart = (id: number) =>
  useCartStore((state) => isCheckedCart(state.carts, id));

export const useIsCheckedAll = () => useCartStore((state) => isCheckedAll(state.carts));

export const useTotalPriceOfCheckedCarts = () =>
  useCartStore((state) => totalPriceOfCheckedCarts(state.carts));

export const useTotalCountOfCheckedCarts = () =>
  useCartStore((state) => totalCountOfCheckedCarts(state.carts));
