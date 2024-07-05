import { useQuery } from '@tanstack/react-query';
import { getCartProducts } from '@/apis/Cart/getCartProducts';
import { CART_QUERY_KEYS } from '@/constants/queryKey';
import { CartProduct } from '@/types/cart';

export const useGetCartProductsQuery = () => {
  return useQuery<CartProduct[]>({
    queryKey: CART_QUERY_KEYS.LISTS(),
    queryFn: getCartProducts,
  });
};
