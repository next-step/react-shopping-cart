import { Carts } from 'types/cart';

export const increaseCartCount = (carts: Carts, id: number) =>
  carts.map((cart) => (cart.id === id ? { ...cart, count: cart.count + 1 } : cart));

export const decreaseCartCount = (carts: Carts, id: number) =>
  carts.map((cart) => (cart.id === id ? { ...cart, count: cart.count - 1 } : cart));

export const toggleCart = (checkedIds: Set<number>, id: number) => {
  const newCheckedIds = new Set(checkedIds);

  if (newCheckedIds.has(id)) {
    newCheckedIds.delete(id);
  } else {
    newCheckedIds.add(id);
  }

  return newCheckedIds;
};

export const totalPriceOfCheckedCarts = (carts: Carts, checkedIds: Set<number>) => {
  return carts.reduce((total, { id, product: { price }, count }) => {
    if (checkedIds.has(id)) {
      return total + price * count;
    } else {
      return total;
    }
  }, 0);
};

export const isCheckedAll = (carts: Carts, checkedIds: Set<number>) => {
  if (checkedIds.size === 0) {
    return false;
  }

  return carts.length === checkedIds.size;
};

export const removeCartByIds = (carts: Carts, ids: number[]) =>
  carts.filter((cart) => !ids.includes(cart.id));
