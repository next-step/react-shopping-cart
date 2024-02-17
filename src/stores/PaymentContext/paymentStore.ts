import { createContext } from 'react';

import { TApiContext, TCartContext, CartStore } from '../commonCartStore';

export type TPaymentStore = CartStore;
export const PaymentContext = createContext<TCartContext>(null);
export const PaymentApiContext = createContext<TApiContext>(null);
