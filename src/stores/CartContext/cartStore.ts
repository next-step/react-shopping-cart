import { createContext } from 'react';
import { cloneDeep } from 'lodash-es';

import { CartProductModel } from '@/models';

import { DispatchContext, ReducerReturnType } from '../types';

export type CartStore = { cart: { [id: number]: CartProductModel } };

const initialCartStore: CartStore = {
  cart: {},
};

export function getInitialCardStore() {
  return cloneDeep(initialCartStore);
}

type TCartStoreActions = 'add' | 'plus' | 'minus' | 'delete';

export function reducer(store: CartStore, action: { type?: TCartStoreActions; payload?: CartProductModel }) {
  const { type, payload } = action;
  if (!payload) return store;

  switch (type) {
    case 'add': {
      store.cart[payload.product.id] = new CartProductModel(payload);
      break;
    }
    case 'plus': {
      const targetProduct = store.cart[payload.product.id];
      if (!targetProduct) return store;

      targetProduct.count += payload.count;
      break;
    }
    case 'minus': {
      const targetProduct = store.cart[payload.product.id];
      if (!targetProduct) return store;

      targetProduct.count -= payload.count;
      break;
    }
    case 'delete': {
      const targetProduct = store.cart[payload.product.id];
      if (!targetProduct) return store;

      delete store.cart[payload.product.id];
      break;
    }
    default: {
      return getInitialCardStore();
    }
  }

  return { ...store };
}

type TCardReducer = ReducerReturnType<typeof reducer>;
type Dispatch = TCardReducer[1];
type TCartContext = CartStore | null;
type TApiContext = DispatchContext<Dispatch>;

export const CartContext = createContext<TCartContext>(null);
export const ApiContext = createContext<TApiContext>(null);
