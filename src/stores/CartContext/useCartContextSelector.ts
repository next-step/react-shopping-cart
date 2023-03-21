import { useContext } from 'react';

import { ApiContext, CartContext } from './cartStore';

export function useCartSelector() {
  return useContext(CartContext);
}

export function useCartContextApiSelector() {
  return useContext(ApiContext);
}
