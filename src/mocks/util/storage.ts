import { CartItemType } from '../../types';

export const cartDataStorage = {
  get: (): CartItemType[] => {
    const storage = window.localStorage.getItem('cartData');
    return storage
      ? JSON.parse(storage)
      : { totalPrice: 0, totalCount: 0, products: [] };
  },
  set: (newCartData: CartItemType[]) => {
    window.localStorage.setItem('cartData', JSON.stringify(newCartData));
  },
};
