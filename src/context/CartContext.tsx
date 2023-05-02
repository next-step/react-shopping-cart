import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { CartItemType, ProductDataType } from '../types';
import { countError } from '../utils';
import {
  COUNT_TYPE,
  CountType,
  DeleteType,
  SELECT_TYPE,
  SelectType,
} from '../constant';

export interface CartListType {
  totalPrice: number;
  totalCount: number;
  products: CartItemType[];
}

export type CartDispatchAction =
  | { type: 'UPDATE_CART_STATE'; products: CartItemType[] }
  | { type: 'CALCULATE_CART_STATE' }
  | { type: 'ADD_ITEM'; product: ProductDataType }
  | { type: 'COUNT_UPDATE'; selectId: number; direction: CountType }
  | {
      type: 'DELETE_ITEM';
      selectId?: number;
      deleteMethod: DeleteType;
    }
  | { type: 'SELECT_ITEM'; selectId?: number; selectRange: SelectType };

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
    case 'UPDATE_CART_STATE':
      return {
        products: action.products,
        totalCount: action.products.length,
        totalPrice: action.products
          .map((item) => item.product.totalPrice)
          .reduce((a, b) => a + b, 0),
      };

    case 'ADD_ITEM':
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

    case 'COUNT_UPDATE':
      return {
        ...state,
        products: state.products.map((item) => {
          if (item.id === action.selectId) {
            countError(item.product.totalQuantity, action.direction);
            const countValue = action.direction === COUNT_TYPE.UP ? +1 : -1;
            return {
              ...item,
              product: {
                ...item.product,
                totalQuantity: item.product.totalQuantity + countValue,
                totalPrice:
                  item.product.price *
                  (item.product.totalQuantity + countValue),
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
        products: state.products.filter((item) => {
          if (action.deleteMethod === 'DIRECT') {
            return item.id !== action.selectId;
          }
          if (action.deleteMethod === 'SELECT') {
            return !item.select;
          }
        }),
      };

    case 'SELECT_ITEM':
      if (action.selectRange === SELECT_TYPE.SINGLE) {
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
      }
      if (action.selectRange === SELECT_TYPE.ALL) {
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
      }
      throw Error('선택된 상품이 없습니다');

    case 'CALCULATE_CART_STATE':
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
    cartDispatch({ type: 'CALCULATE_CART_STATE' });
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
