import { useMutation, useQueryClient } from '@tanstack/react-query';
import useCartStore from '@/store/cartStore';
import { postCartProduct } from '@/apis/Cart/postCartProduct';
import { CART_QUERY_KEYS } from '@/constants/queryKey';

export const usePostCartProductMutation = () => {
  const queryClient = useQueryClient();

  const addToCart = useCartStore.use.addToCart();

  const postCartProductMutation = useMutation({
    mutationFn: postCartProduct,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: CART_QUERY_KEYS.LISTS() });

      addToCart(data);
    },
  });

  return postCartProductMutation;
};
