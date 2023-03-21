import React, { PropsWithChildren, useReducer, useMemo } from 'react';

import { reducer, getInitialCardStore, CartStore } from '../commonCartStore';
import { OrderApiContext, OrderContext } from './orderStore';

interface OrderContextProviderProps {
  value?: CartStore;
}

export function OrderContextProvider({ value, children }: PropsWithChildren<OrderContextProviderProps>) {
  const [store, dispatch] = useReducer(reducer, value || getInitialCardStore());

  const orderContextApis = useMemo(() => ({ dispatch }), [dispatch]);

  return (
    // eslint-disable-next-line
    <OrderContext.Provider value={{ ...store }}>
      <OrderApiContext.Provider value={orderContextApis}>{children}</OrderApiContext.Provider>
    </OrderContext.Provider>
  );
}
