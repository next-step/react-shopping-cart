import { cloneDeep } from 'lodash-es';

import { CartProductModel, CartProductModelPOJO } from '@/models';

import { DispatchContext, ReducerReturnType } from './types';

export type CartStore = { [productId: number]: CartProductModel };

const initialCartStore: CartStore = {};

export function getInitialCardStore() {
  return cloneDeep(initialCartStore);
}

type TCartStoreActions = 'add' | 'update' | 'delete';

export function reducer(
  store: CartStore,
  action: { type?: TCartStoreActions; payload?: CartProductModel[] | CartProductModelPOJO[] }
) {
  const { type, payload } = action;
  if (!payload) return store;
  const cartProducts = payload;

  switch (type) {
    case 'add': {
      cartProducts.forEach((cartProduct) => {
        store[cartProduct.product.id] = new CartProductModel(cartProduct);
      });
      break;
    }
    case 'update': {
      cartProducts.forEach((cartProduct) => {
        const targetProduct = store[cartProduct.product.id];
        if (!targetProduct) return;

        store[cartProduct.product.id] = new CartProductModel(cartProduct);
      });
      break;
    }
    case 'delete': {
      cartProducts.forEach((cartProduct) => {
        const targetProduct = store[cartProduct.product.id];
        if (!targetProduct) return;

        delete store[cartProduct.product.id];
      });
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
export type TCartContext = CartStore | null;
export type TApiContext = DispatchContext<Dispatch>;
