import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteCartProduct } from '@/apis/Cart/deleteCartProduct';
import { CART_QUERY_KEYS } from '@/constants/queryKey';
import { CartProduct } from '@/types/cart';
import { Product } from '@/types/product';

export const useDeleteCartProductMutation = () => {
  const queryClient = useQueryClient();

  const deleteCartProductMutation = useMutation({
    mutationFn: deleteCartProduct,

    onMutate: async (selectedId: Product['id']) => {
      await queryClient.cancelQueries({ queryKey: CART_QUERY_KEYS.LISTS() });

      const prevCartProducts =
        (queryClient.getQueryData(CART_QUERY_KEYS.LISTS()) as CartProduct[]) ||
        [];

      const targetCartProduct = prevCartProducts.find(
        ({ product }) => product.id === selectedId
      );

      if (targetCartProduct) {
        queryClient.setQueryData<CartProduct[]>(
          CART_QUERY_KEYS.LISTS(),
          prevCartProducts.filter(({ id }) => id !== targetCartProduct.id)
        );
      }

      return { prevCartProducts };
    },

    onError: (_, __, context) => {
      if (context?.prevCartProducts) {
        queryClient.setQueryData(CART_QUERY_KEYS.LISTS(), context);
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: CART_QUERY_KEYS.LISTS() });
    },
  });

  return deleteCartProductMutation;
};
