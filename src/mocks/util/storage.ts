import { CartItemType } from '../../types';

export const cartDataStorage = {
  get: (): CartItemType[] => {
    const storage = window.localStorage.getItem('cartData');
    return storage ? JSON.parse(storage) : [];
  },
  set: (newCartData: CartItemType[]) => {
    window.localStorage.setItem('cartData', JSON.stringify(newCartData));
  },
};
