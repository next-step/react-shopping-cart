import { atom } from "recoil";
import { ICartUI } from "../components";

export const cartState = atom({
  key: "cartState", // unique ID (with respect to other atoms/selectors)
  default: { items: [] } as ICartUI, // default value (aka initial value)
});
