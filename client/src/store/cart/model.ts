import { Cart, Carts } from 'types/cart';

export const increaseCartCount = (carts: Carts, id: number) =>
  carts.map((cart) => (cart.id === id ? { ...cart, count: cart.count + 1 } : cart));

export const decreaseCartCount = (carts: Carts, id: number) =>
  carts.map((cart) => (cart.id === id ? { ...cart, count: cart.count - 1 } : cart));

export const toggleCart = (checkedCarts: Set<Cart>, cart: Cart) => {
  const newCheckedCarts = new Set(checkedCarts);

  if (newCheckedCarts.has(cart)) {
    newCheckedCarts.delete(cart);
  } else {
    newCheckedCarts.add(cart);
  }

  return newCheckedCarts;
};

export const totalPriceOfCheckedCarts = (checkedCarts: Set<Cart>) =>
  Array.from(checkedCarts).reduce(
    (total, { product: { price }, count }) => total + price * count,
    0
  );

export const isCheckedAll = (carts: Carts, checkedCarts: Set<Cart>) => {
  if (checkedCarts.size === 0) {
    return false;
  }

  return carts.length === checkedCarts.size;
};

export const removeCartByIds = (carts: Carts, ids: number[]) =>
  carts.filter((cart) => !ids.includes(cart.id));
