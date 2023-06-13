import { atom } from "recoil";
import { ICart } from "../domain/shopping-cart/types";

export const cartState = atom({
  key: "cartState", // unique ID (with respect to other atoms/selectors)
  default: { items: [] } as ICart, // default value (aka initial value)
});
