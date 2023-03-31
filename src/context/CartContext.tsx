import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { CartItemType, ProductDataType } from '../types';

export interface CartListType {
  totalPrice: number;
  totalCount: number;
  products: CartItemType[];
}

type CartDispatchAction =
  | { type: 'ADD_CART'; product: ProductDataType }
  | { type: 'COUNT_UP_ITEM'; selectId: number }
  | { type: 'COUNT_DOWN_ITEM'; selectId: number }
  | { type: 'DELETE_ITEM'; selectId: number }
  | { type: 'DELETE_SELECT_ITEM' }
  | { type: 'SELECT_ITEM'; selectId: number }
  | { type: 'SELECT_ALL_ITEM' }
  | { type: 'CALCULATE_CART' };

const initCartData = {
  totalCount: 0,
  totalPrice: 0,
  products: [],
};

export type CartDispatchType = Dispatch<CartDispatchAction>;
const CartStateContext = createContext<CartListType | null>(null);
const CartDispatchContext = createContext<CartDispatchType | null>(null);

const cartReducer = (
  state: CartListType,
  action: CartDispatchAction
): CartListType => {
  switch (action.type) {
    case 'ADD_CART':
      return {
        ...state,
        products: [
          ...state.products,
          {
            id: state.products.length + 1,
            select: true,
            product: {
              ...action.product,
              totalPrice: action.product.price,
              totalQuantity: 1,
            },
          },
        ],
      };

    case 'COUNT_UP_ITEM':
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === action.selectId) {
            if (item.product.totalQuantity === 20) {
              return item;
            }
            return {
              ...item,
              product: {
                ...item.product,
                totalQuantity: item.product.totalQuantity + 1,
                totalPrice:
                  item.product.price * (item.product.totalQuantity + 1),
              },
            };
          } else {
            return item;
          }
        }),
      };
    case 'COUNT_DOWN_ITEM':
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === action.selectId) {
            if (item.product.totalQuantity === 1) {
              return item;
            }
            return {
              ...item,
              product: {
                ...item.product,
                totalQuantity: item.product.totalQuantity - 1,
                totalPrice:
                  item.product.price * (item.product.totalQuantity - 1),
              },
            };
          } else {
            return item;
          }
        }),
      };
    case 'DELETE_ITEM':
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.selectId),
      };
    case 'DELETE_SELECT_ITEM':
      return {
        ...state,
        products: state.products.filter((item) => !item.select),
      };
    case 'SELECT_ITEM':
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === action.selectId) {
            return {
              ...item,
              select: !item.select,
            };
          } else {
            return item;
          }
        }),
      };
    case 'SELECT_ALL_ITEM':
      if (state.products.some((item) => item.select)) {
        return {
          ...state,
          products: state.products.map((item) => {
            return {
              ...item,
              select: false,
            };
          }),
        };
      } else {
        return {
          ...state,
          products: state.products.map((item) => {
            return {
              ...item,
              select: true,
            };
          }),
        };
      }
    case 'CALCULATE_CART':
      return {
        ...state,
        totalCount: state.products.filter((item) => item.select).length,
        totalPrice: state.products
          .filter((item) => item.select)
          .map((item) => item.product.totalPrice)
          .reduce((a, b) => a + b, 0),
      };
  }
};

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initCartData);

  useEffect(() => {
    cartDispatch({ type: 'CALCULATE_CART' });
  }, [cartState.products]);

  return (
    <CartStateContext.Provider value={cartState}>
      <CartDispatchContext.Provider value={cartDispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

export const useCartState = () => {
  const state = useContext(CartStateContext);
  if (!state) throw new Error('Cannot found CartStateContext ');
  return state;
};

export const useCartDispatch = () => {
  const dispatch = useContext(CartDispatchContext);
  if (!dispatch) throw new Error('Cannot found CartDispatchContext ');
  return dispatch;
};
