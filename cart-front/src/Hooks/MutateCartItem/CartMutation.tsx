import { useMutation } from "@tanstack/react-query";
import { URLS } from "../../Const/url";
import { AxiosInstance } from "../../Apis/axios";
import { queryClient } from "../../main";
import { CartItemsWithCheck, CartItemWithCheck } from "../../Types/types";

export const useCartItemsToggleMutation = () => {
  const CartItemsToggleMutation = useMutation({
    mutationFn: () => AxiosInstance.post(URLS.postresetCartsDone()),

    onMutate: async (flag: boolean) => {
      const previousCart = queryClient.getQueryData<CartItemsWithCheck>([
        "Cart",
      ]);
      const { carts } = previousCart ? previousCart : { carts: [] };

      const NextCart = {
        ...previousCart,
        carts: carts.map((CartItemWithCheck: CartItemWithCheck) => ({
          ...CartItemWithCheck,
          done: flag,
        })),
      };

      queryClient.setQueryData(["Cart"], NextCart);

      return { previousCart };
    },

    onError: (error, _, context) => {
      if (context?.previousCart) {
        queryClient.setQueryData(["Cart"], context.previousCart);
      }
      throw error;
    },
  });

  return [CartItemsToggleMutation];
};
