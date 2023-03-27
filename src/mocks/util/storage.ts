import { CartInfoType } from '../../types';

export const cartDataStorage = {
  get: () => window.localStorage.getItem('cartData'),
  set: (newCartData: CartInfoType[]) => {
    window.localStorage.setItem('cartData', JSON.stringify(newCartData));
  },
};
