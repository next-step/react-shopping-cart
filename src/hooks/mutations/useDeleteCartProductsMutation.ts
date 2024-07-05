import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCartProducts } from '@/apis/Cart/deleteCartProducts';
import { CART_QUERY_KEYS } from '@/constants/queryKey';
import { CartProduct } from '@/types/cart';
import { Product } from '@/types/product';

export const useDeleteCartProductsMutation = () => {
  const queryClient = useQueryClient();

  const deleteCartProductsMutation = useMutation({
    mutationFn: deleteCartProducts,

    onMutate: async (selectedIds: Product['id'][]) => {
      await queryClient.cancelQueries({ queryKey: CART_QUERY_KEYS.LISTS() });

      const prevCartProducts = queryClient.getQueryData(
        CART_QUERY_KEYS.LISTS()
      ) as CartProduct[];

      if (prevCartProducts) {
        queryClient.setQueryData<CartProduct[]>(
          CART_QUERY_KEYS.LISTS(),
          prevCartProducts.filter(
            ({ product }) => !selectedIds.includes(product.id)
          )
        );
      }

      return { prevCartProducts };
    },

    onError: (_, __, context) => {
      if (context?.prevCartProducts) {
        queryClient.setQueryData(
          CART_QUERY_KEYS.LISTS(),
          context.prevCartProducts
        );
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: CART_QUERY_KEYS.LISTS() });
    },
  });

  return deleteCartProductsMutation;
};
