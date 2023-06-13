import { ICart, ICartItem, IProduct } from "../domain/types";

export interface ICartUI extends ICart {
  items: ICartItemUI[];
}

export interface ICartItemUI extends ICartItem {
  product: IProductUI;
}

export interface IProductUI extends IProduct {
  checked?: boolean;
}
