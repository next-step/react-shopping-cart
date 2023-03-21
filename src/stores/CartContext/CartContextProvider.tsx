import React, { PropsWithChildren, useReducer, useMemo } from 'react';

import { reducer, getInitialCardStore, CartStore, ApiContext, CartContext } from './cartStore';

interface CartContextProviderProps {
  value?: CartStore;
}

export function CartContextProvider({ value, children }: PropsWithChildren<CartContextProviderProps>) {
  const [store, dispatch] = useReducer(reducer, value || getInitialCardStore());

  const cardContextApis = useMemo(() => ({ dispatch }), [dispatch]);

  return (
    // eslint-disable-next-line
    <CartContext.Provider value={{ ...store }}>
      <ApiContext.Provider value={cardContextApis}>{children}</ApiContext.Provider>
    </CartContext.Provider>
  );
}
