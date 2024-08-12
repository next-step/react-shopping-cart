import { useQuery } from "@tanstack/react-query";
import { CartQueryOptions } from "../../routes/_Cart/Cart";
import { CartItemWithCheck } from "../../Types/types";
import { useOrderConfirmMutation } from "../../Hooks/MutateCartItem/orderConfirm";
import { useCartItemDeleteAllMutation } from "../../Hooks/MutateCartItem/CartItemsDeleteAllMutation";
import { Summary } from "../../Components/Summary/Summary";

export const OrderSummary = () => {
  const {
    data: { carts },
  } = useQuery(CartQueryOptions());
  const CartItemsDeleteAllMutation = useCartItemDeleteAllMutation();
  const CartItemsorderConfirmMutation = useOrderConfirmMutation();
  return (
    <Summary
      doneItemsCount={
        carts.filter((item: CartItemWithCheck) => item.done).length
      }
      nextClick={() => {
        CartItemsDeleteAllMutation.mutate();
        CartItemsorderConfirmMutation.mutate();
      }}
      totalAmount={carts.reduce(
        (sum: number, item: CartItemWithCheck) =>
          item.done ? sum + item.product.price * item.quantity : sum,
        0
      )}
    />
  );
};
