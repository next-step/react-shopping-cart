import { createContext } from 'react';

import { TApiContext, TCartContext, CartStore } from '../commonCartStore';

export type TOrderStore = CartStore;
export const OrderContext = createContext<TCartContext>(null);
export const OrderApiContext = createContext<TApiContext>(null);
