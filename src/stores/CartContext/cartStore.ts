import { createContext } from 'react';

import { TApiContext, TCartContext, CartStore } from '../commonCartStore';

export type TCartStore = CartStore;
export const CartContext = createContext<TCartContext>(null);
export const CartApiContext = createContext<TApiContext>(null);
