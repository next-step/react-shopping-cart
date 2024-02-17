import { useContext } from 'react';

import { PaymentApiContext, PaymentContext } from './paymentStore';

export function usePaymentContext() {
  return useContext(PaymentContext);
}

export function usePaymentContextApis() {
  return useContext(PaymentApiContext);
}
