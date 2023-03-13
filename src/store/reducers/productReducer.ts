import { ProductItem } from "../type";

export interface ProductsState {
  products: ProductItem[];
}

export type ProductsActionType = {
  type: "FETCH_PRODUCTS";
  payload: ProductItem[];
};

export const productsReducer = (
  state: ProductsState,
  action: ProductsActionType
): ProductsState => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return { ...state, products: action.payload };
    default:
      return state;
  }
};
