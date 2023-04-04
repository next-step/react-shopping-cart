import { CART_PRODUCT_QUANTITY } from '@/constants';
import { CartList, CartWithQuantityAndChecked } from '@/types';

export type QuantityButtonType = 'up' | 'down';

export const quantityCalc = (type: QuantityButtonType, quantity: number) => {
  const { MIN, MAX } = CART_PRODUCT_QUANTITY;
  if (type === 'up') return quantity === MAX ? MAX : quantity + 1;
  if (type === 'down') return quantity === MIN ? MIN : quantity - 1;
  return 0;
};

export const createCartListWithQuantityAndChecked = (items: CartList) =>
  items.map(item => ({
    id: item.id,
    product: {
      ...item.product,
      quantity: 1,
      checked: true,
    },
  }));

export const toggleAllChecked = (items: CartWithQuantityAndChecked[], checked: boolean) => {
  return items.map(item => ({
    ...item,
    product: {
      ...item.product,
      checked,
    },
  }));
};

export const toggleOneChecked = (items: CartWithQuantityAndChecked[], id: number) => {
  return items.map(item =>
    item.id === id
      ? {
          ...item,
          product: {
            ...item.product,
            checked: !item.product.checked,
          },
        }
      : item,
  );
};

export const getCheckedItems = (items: CartWithQuantityAndChecked[]) => items.filter(item => item.product.checked);
