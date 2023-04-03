import { CartWithQuantityAndChecked } from '@/types';

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
