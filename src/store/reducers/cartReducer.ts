import { CartItem } from "../type";

export interface CartsState {
  carts: CartItem[];
}

export type CartsActionType = {
  type: "FETCH_CARTS";
  payload: CartItem[];
};

export const cartsReducer = (
  state: CartsState,
  action: CartsActionType
): CartsState => {
  switch (action.type) {
    case "FETCH_CARTS":
      return { ...state, carts: action.payload };
    default:
      return state;
  }
};
