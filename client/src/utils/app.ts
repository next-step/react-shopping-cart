import type { ProductType, OrderProductType } from 'types';

export const calculateProductTotal = (array: ProductType[]) => {
  const total = array.reduce((prev, next) => {
    return prev + next.price;
  }, 0);
  return total;
};

export const calculateOrderProductTotal = (array: OrderProductType[]) => {
  const total = array.reduce((prev, next) => {
    return prev + next.price * next.amount;
  }, 0);
  return total;
};
export const calculateTotalAmount = (array: OrderProductType[]) => {
  const amounts = array.reduce((prev, next) => {
    return prev + next.amount;
  }, 0);
  return amounts;
};
