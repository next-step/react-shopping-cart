import { useEffect } from 'react';
import { useSync } from './useSync';
import { useGetCartProductsQuery } from '../queries/useGetCartProductsQuery';
import { useGetOrderQuery } from '../queries/useGetOrderQuery';
import { usePostCartMutation } from '../mutations/usePostCartMutation';
import { usePostOrderListMutation } from '../mutations/usePostOrderListMutation';
import useCartStore from '@/store/cartStore';
import useOrderStore from '@/store/orderStore';
import { LOCAL_STORAGE_KEYS } from '@/constants/storageKey';
import { localStorageUtils } from '@/utils/localStorage';
import { CartProduct, CartState } from '@/types/cart';
import { Order, OrderState } from '@/types/order';

export const useSyncWithClientAndServer = () => {
  /* 장바구니 클라이언트 서버 데이터 Sync */
  const serverCartQuery = useGetCartProductsQuery();
  const setCart = useCartStore.use.setCart();
  const { mutateAsync: postCart } = usePostCartMutation();

  const { update: updateCartServer } = useSync({
    localStorageKey: LOCAL_STORAGE_KEYS.CART,
    serverQuery: serverCartQuery,
    getLocalStorageData: () => {
      const localStorageCartState = localStorageUtils.getItem<CartState>(
        LOCAL_STORAGE_KEYS.CART
      );

      if (localStorageCartState?.state?.cart) {
        return {
          state: { data: localStorageCartState.state.cart },
          version: localStorageCartState.version + 1,
        };
      }
      return null;
    },
    setData: (cart: CartProduct[]) => setCart(cart),
    getKey: (cart: CartProduct) => cart.product.id,
    updateServer: async (cart: CartProduct[]) => {
      await postCart(cart);
    },
  });

  /* 주문 클라이언트 서버 데이터 Sync */
  const serverOrderQuery = useGetOrderQuery();
  const setOrder = useOrderStore.use.setOrder();
  const { mutateAsync: postOrderList } = usePostOrderListMutation();

  const { update: updateOrderServer } = useSync({
    localStorageKey: LOCAL_STORAGE_KEYS.ORDER,
    serverQuery: serverOrderQuery,
    getLocalStorageData: () => {
      const localStorageOrderState = localStorageUtils.getItem<OrderState>(
        LOCAL_STORAGE_KEYS.ORDER
      );

      if (localStorageOrderState?.state?.order) {
        return {
          state: { data: localStorageOrderState.state.order },
          version: localStorageOrderState.version + 1,
        };
      }
      return null;
    },
    setData: (order: Order[]) => setOrder(order),
    getKey: (order: Order) => order.id,
    updateServer: async (order: Order[]) => {
      await postOrderList(order);
    },
  });

  useEffect(() => {
    updateCartServer();
    updateOrderServer();
  }, []);
};
