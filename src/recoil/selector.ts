import { selector } from "recoil";
import { cartState } from "./atoms";
import { CART } from "../domain/shopping-cart/constants";

export const checkedItemsSelector = selector({
  key: "checkedProductsState", // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const cart = get(cartState);

    return cart.items?.filter(({ product: { checked } }) => checked) || [];
  },
});

export const allCheckedProductsSelector = selector({
  key: "allCheckedProductsState",
  get: ({ get }) => {
    const cart = get(cartState);

    return cart.items?.every(({ product: { checked } }) => !!checked) || false;
  },
});

export const estimatedPriceSelector = selector({
  key: "estimatedPriceState",
  get: ({ get }) => {
    const cart = get(cartState);

    return (
      cart.items?.reduce(
        (result, { product: { checked, price, quantity = CART.PRODUCTS.DEFAULT_INITIAL_QUANTITY } }) =>
          checked ? result + price * quantity : result,
        0
      ) || 0
    );
  },
});
