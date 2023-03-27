import { Carts } from 'types/cart';
import { CheckableCart } from './types';

export const initializeCarts = (carts: Carts) =>
  carts.map((cart) => ({ ...cart, isChecked: false }));

export const increaseCartCount = (carts: CheckableCart[], id: number) =>
  carts.map((cart) => (cart.id === id ? { ...cart, count: cart.count + 1 } : cart));

export const decreaseCartCount = (carts: CheckableCart[], id: number) =>
  carts.map((cart) => (cart.id === id ? { ...cart, count: cart.count - 1 } : cart));

export const toggleCart = (carts: CheckableCart[], id: number) =>
  carts.map((cart) => (cart.id === id ? { ...cart, isChecked: !cart.isChecked } : cart));

export const checkAllCart = (carts: CheckableCart[]) =>
  carts.map((cart) => ({ ...cart, isChecked: true }));

export const uncheckAllCart = (carts: CheckableCart[]) =>
  carts.map((cart) => ({ ...cart, isChecked: false }));

export const totalPriceOfCheckedCarts = (carts: CheckableCart[]) => {
  return carts.reduce(
    (total, { isChecked, product, count }) => (isChecked ? total + product.price * count : total),
    0
  );
};

export const totalCountOfCheckedCarts = (carts: CheckableCart[]) =>
  carts.reduce((acc, { isChecked, count }) => (isChecked ? acc + count : acc), 0);

export const isCheckedCart = (carts: CheckableCart[], id: number) => {
  const cart = carts.find((cart) => cart.id === id);

  return cart?.isChecked ?? false;
};

export const isCheckedAll = (carts: CheckableCart[]) => {
  if (carts.length === 0) {
    return false;
  }

  return carts.every((cart) => cart.isChecked);
};
