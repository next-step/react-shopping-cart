import { useContext } from 'react';

import { OrderApiContext, OrderContext } from './orderStore';

export function useOrderSelector() {
  return useContext(OrderContext);
}

export function useOrderContextApiSelector() {
  return useContext(OrderApiContext);
}
