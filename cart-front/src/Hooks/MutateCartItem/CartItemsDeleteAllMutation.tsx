import { useMutation } from "@tanstack/react-query";
import { AxiosInstance } from "../../Apis/axios";
import { URLS } from "../../Const/url";
import { queryClient } from "../../main";
import { CartItemsWithCheck } from "../../Types/types";

export const useCartItemDeleteAllMutation = () => {
  return useMutation({
    mutationFn: () => AxiosInstance.delete(URLS.deleteAllCartsItems()),

    onMutate: async () => {
      const previousCart = queryClient.getQueryData<CartItemsWithCheck>([
        "Cart",
      ]);

      const nextCart = {
        ...previousCart,
        carts: [],
      };
      queryClient.setQueryData(["Cart"], nextCart);
      return { previousCart };
    },

    onError: (error, _, context) => {
      queryClient.setQueryData(["Cart"], context ? context.previousCart : []);
      throw error;
    },
  });
};
