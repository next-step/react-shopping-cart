import type { ProductType, CartProductType } from 'types';

export const calculateProductTotal = (array: ProductType[]) => {
  const total = array.reduce((prev, next) => {
    return prev + next.price;
  }, 0);
  return total;
};

export const calculateCartProductTotal = (array: CartProductType[]) => {
  const total = array.reduce((prev, next) => {
    if (next.isOrder) {
      return prev + next.price * next.amount;
    } else {
      return prev;
    }
  }, 0);
  return total;
};
export const calculateCartTotalAmount = (array: CartProductType[]) => {
  const amounts = array.reduce((prev, next) => {
    if (next.isOrder) {
      return prev + next.amount;
    } else {
      return prev;
    }
  }, 0);
  return amounts;
};
