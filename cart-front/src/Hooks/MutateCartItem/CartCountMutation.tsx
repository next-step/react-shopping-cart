import { useMutation } from "@tanstack/react-query";
import { queryClient } from "../../main";
import { IncreaseItem, DecreaseItem } from "../../Apis/api";
import { CartItemsWithCheck, CartItemWithCheck } from "../../Types/types";

export const useCartCountMutation = () => {
  const CartItemIncreaseMutation = useMutation({
    mutationFn: (id: string) => IncreaseItem(id),

    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: ["Cart"] });

      const previousCart = queryClient.getQueryData<CartItemsWithCheck>([
        "Cart",
      ]);

      if (!previousCart) {
        return;
      }
      const nextCart = {
        ...previousCart,
        carts: previousCart.carts.map((cartItem: CartItemWithCheck) =>
          cartItem.id.toString() === id && cartItem.quantity > 0
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
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

  return [CartItemIncreaseMutation];
};

export const useCartItemDecreaseMutation = () => {
  return useMutation({
    mutationFn: (id: string) => DecreaseItem(id),

    onMutate: async (id: string) => {
      await queryClient.cancelQueries({ queryKey: ["Cart"] });

      const previousCart = queryClient.getQueryData<CartItemsWithCheck>([
        "Cart",
      ]);
      if (!previousCart) {
        return;
      }
      const nextCart = {
        ...previousCart,
        carts: previousCart.carts.map((cartItem: CartItemWithCheck) =>
          cartItem.id.toString() === id && cartItem.quantity > 0
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        ),
      };

      queryClient.setQueryData(["Cart"], nextCart);

      return { previousCart };
    },

    onError: (error, _, context) => {
      if (context?.previousCart) {
        queryClient.setQueryData(["Cart"], context.previousCart);
        throw(error)
      }
    },
  });
};
