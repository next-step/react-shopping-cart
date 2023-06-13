import { selector } from "recoil";
import { cartState } from "./atoms";
import { CART } from "../domain/shopping-cart/constants";

export const checkedProductsSelector = selector({
  key: "checkedProductsState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const cart = get(cartState);

    return cart.products.filter(({ checked }) => checked);
  },
});

export const allCheckedProductsSelector = selector({
  key: "allCheckedProductsState",
  get: ({ get }) => {
    const cart = get(cartState);

    return cart.products.every(({ checked }) => !!checked);
  },
});

export const estimatedPriceSelector = selector({
  key: "estimatedPriceState",
  get: ({ get }) => {
    const cart = get(cartState);

    return cart.products.reduce(
      (result, { checked, price, quantity = CART.PRODUCTS.DEFAULT_INITIAL_QUANTITY }) =>
        checked ? result + price * quantity : result,
      0
    );
  },
});
