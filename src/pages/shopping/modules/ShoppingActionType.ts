import { Cart } from 'types/cart';

export const ADD_SELECTED_CARTS_ITEMS = 'ADD_SELECTED_CARTS_ITEMS';
type AddSelectedCartsItem = {
  type: typeof ADD_SELECTED_CARTS_ITEMS;
  payload: Cart[];
};

export type ActionType = AddSelectedCartsItem;
