import React, { PropsWithChildren, useReducer, useMemo } from 'react';

import { reducer, getInitialCardStore, CartStore } from '../commonCartStore';
import { PaymentApiContext, PaymentContext } from './paymentStore';

interface PaymentContextProviderProps {
  value?: CartStore;
}

export function PaymentContextProvider({ value, children }: PropsWithChildren<PaymentContextProviderProps>) {
  const [store, dispatch] = useReducer(reducer, value || getInitialCardStore());

  const PaymentContextApis = useMemo(() => ({ dispatch }), [dispatch]);

  return (
    // eslint-disable-next-line
    <PaymentContext.Provider value={{ ...store }}>
      <PaymentApiContext.Provider value={PaymentContextApis}>{children}</PaymentApiContext.Provider>
    </PaymentContext.Provider>
  );
}
