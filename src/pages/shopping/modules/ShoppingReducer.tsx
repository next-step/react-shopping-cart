import { Cart } from 'types/cart';
import { ActionType, ADD_SELECTED_CARTS_ITEMS } from './ShoppingActionType';

export interface DefaultValueState {
  selectedCartsItems?: Cart[];
}

export const defaultValue: DefaultValueState = {};

function ShoppingReducer(
  state: DefaultValueState = defaultValue,
  action: ActionType
): DefaultValueState {
  switch (action.type) {
    case ADD_SELECTED_CARTS_ITEMS:
      return { ...state, selectedCartsItems: action.payload };
    default:
      throw new Error('처리되지 않은 action 입니다.');
  }
}

export default ShoppingReducer;
