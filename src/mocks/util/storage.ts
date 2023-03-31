import { CartListType } from '../../context/CartContext';

export const cartDataStorage = {
  get: (): CartListType => {
    const storage = window.localStorage.getItem('cartData');
    return storage
      ? JSON.parse(storage)
      : { totalPrice: 0, totalCount: 0, products: [] };
  },
  set: (newCartData: CartListType) => {
    window.localStorage.setItem('cartData', JSON.stringify(newCartData));
  },
};
