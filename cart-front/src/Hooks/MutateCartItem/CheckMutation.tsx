import { ToggleCheck } from "../../Apis/api";
import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../main";
import { CartItemsWithCheck } from "../../Types/types";

export const useCheckMutation = () => {
  const CheckMutation = useMutation({
    mutationFn: (id: string) => ToggleCheck(id), // mutationFn을 함수로 감싸서 호출합니다.

    onMutate: async (id: string) => {
      const previousCart = queryClient.getQueryData<CartItemsWithCheck>([
        "Cart",
      ]);
      console.log("cart", previousCart);
      if (!previousCart) return;

      const nextCart = previousCart.carts.map((cart) =>
        cart.id === Number(id) ? { ...cart, done: !cart.done } : cart
      );

      queryClient.setQueryData(["Cart"], {
        ...previousCart,
        carts: nextCart,
      });

      return { previousCart };
    },

    onError: (error, _, context) => {
      if (context?.previousCart) {
        queryClient.setQueryData(["Cart"], context.previousCart);
      }
      throw error;
    },
  });

  return [CheckMutation];
};
