import { useMutation } from "@tanstack/react-query";
import { URLS } from "../../Const/url";
import { AxiosInstance } from "../../Apis/axios";
import { queryClient } from "../../main";
import { CartItemsWithCheck, CartItemWithCheck } from "../../Types/types";

export const useCartItemDeleteMutation = () => {
  const cartItemDeleteMutation = useMutation({
    mutationFn: (id: string) => AxiosInstance.delete(URLS.deleteCartsItem(id)),

    onMutate: async (id: string) => {
      const previousCart = queryClient.getQueryData<CartItemsWithCheck>([
        "Cart",
      ]);

      if (!previousCart) return;
      const nextCart = {
        ...previousCart,
        carts: previousCart.carts.filter(
          (cartItem: CartItemWithCheck) => cartItem.id.toString() !== id
        ),
      };
      queryClient.setQueryData(["Cart"], nextCart);

      return { previousCart };
    },

    onError: (error, _, context) => {
      if (context?.previousCart) {
        queryClient.setQueryData(["Cart"], context.previousCart);
      }
      throw error;
    },
  });

  return [cartItemDeleteMutation];
};
