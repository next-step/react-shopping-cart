import { CartItemType } from '../../types';

export const cartDataStorage = {
  get: () => window.localStorage.getItem('cartData'),
  set: (newCartData: CartItemType[]) => {
    window.localStorage.setItem('cartData', JSON.stringify(newCartData));
  },
};
