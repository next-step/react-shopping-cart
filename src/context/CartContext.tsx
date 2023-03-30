import {
  createContext,
  Dispatch,
  PropsWithChildren,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { CartInfoType } from '../types';

export interface CartType {
  totalPrice: number;
  totalCount: number;
  products: CartInfoType[];
}

export type CartDispatchType = Dispatch<Action>;
const CartStateContext = createContext<CartType | null>(null);
const CartDispatchContext = createContext<CartDispatchType | null>(null);
const initData = {
  totalPrice: 2,
  totalCount: 1,
  products: [
    {
      id: 1675351764412,
      select: true,
      product: {
        id: 1,
        name: '[리뉴얼]젓가락(종이)-정성을 담아',
        price: 21800,
        imageUrl:
          'https://cdn-mart.baemin.com/sellergoods/main/5297837f-5ecd-4945-be2f-4a75854cd06e.jpg',
        totalQuantity: 1,
        totalPrice: 21800,
      },
    },
    {
      id: 1675352324224,
      select: true,
      product: {
        id: 2,
        name: '젓가락(종이)-웬만해선 이 맛을 막을 수 없다',
        price: 21800,
        imageUrl:
          'https://cdn-mart.baemin.com/sellergoods/main/1b6e926b-52a3-4a92-8db5-fddaccdb2583.jpg',
        totalQuantity: 1,
        totalPrice: 21800,
      },
    },
  ],
};

type Action =
  | { type: 'CALCULATE_CART' }
  | { type: 'COUNT_UP'; selectId: number }
  | { type: 'COUNT_DOWN'; selectId: number }
  | { type: 'DELETE'; selectId: number }
  | { type: 'SELECT_DELETE' }
  | { type: 'CHECKED'; selectId: number }
  | { type: 'All_CHECKED' };

const cartReducer = (state: CartType, action: Action): CartType => {
  switch (action.type) {
    case 'CALCULATE_CART':
      return {
        ...state,
        totalCount: state.products.filter((item) => item.select).length,
        totalPrice: state.products
          .filter((item) => item.select)
          .map((item) => item.product.totalPrice)
          .reduce((a, b) => a + b, 0),
      };
    case 'COUNT_UP':
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
    case 'COUNT_DOWN':
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
    case 'SELECT_DELETE':
      return {
        ...state,
        products: state.products.filter((item) => !item.select),
      };
    case 'DELETE':
      return {
        ...state,
        products: state.products.filter((item) => item.id !== action.selectId),
      };
    case 'All_CHECKED':
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

    case 'CHECKED':
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
};

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, initData);

  useEffect(() => {
    console.log(cartState.totalPrice);
    cartDispatch({ type: 'CALCULATE_CART' });
  }, [cartState.totalPrice, cartState.products]);

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
  if (!state) throw new Error('Cannot CartStateContext ');
  return state;
};

export const useCartDispatch = () => {
  const dispatch = useContext(CartDispatchContext);
  if (!dispatch) throw new Error('Cannot CartDispatchContext ');
  return dispatch;
};
