import addProductToCart from '@/apis/addProductToCart';
import removeProductFromCart from '@/apis/removeProductFromCart';
import { Product } from '@/models/product.model';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { PRODUCTS_QUERY_KEY } from './useProductsQuery';

interface UseToggleCartMutationRequest {
  productId: number;
  isInCart: boolean;
}

export default function useToggleCartMutation({ productId, isInCart }: UseToggleCartMutationRequest) {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: isInCart ? () => removeProductFromCart(productId) : () => addProductToCart(productId),
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: [PRODUCTS_QUERY_KEY] });
      const previousProducts = queryClient.getQueryData([PRODUCTS_QUERY_KEY]);

      queryClient.setQueryData([PRODUCTS_QUERY_KEY], (old: Product[]) =>
        old.map((item) => {
          if (item.id === productId) {
            return { ...item, isInCart: !item.isInCart };
          }
          return item;
        })
      );

      return { previousProducts };
    },
    onError: (_, __, context) => {
      queryClient.setQueryData([PRODUCTS_QUERY_KEY], context?.previousProducts);
    },
  });
}
