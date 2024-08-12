import { CartQueryOptions } from "../../routes/_Cart/Cart";
import { useQuery } from "@tanstack/react-query";
import CartItem from "./CartItem";
import { CartItemWithCheck } from "../../Types/types";
import Flex from "../../ComponentsPrototype/Layout/Flex";
import { ErrorBoundary } from "react-error-boundary";

export const CartItemsList = () => {
  const {
    data: { carts },
  } = useQuery(CartQueryOptions());

  return (
    <Flex className="flex gap-15 mt-10 flex-col">
      <ErrorBoundary fallback={<div>cart list error</div>}>
        {carts.map((item: CartItemWithCheck) => (
          <CartItem item={item} key={item.id} />
        ))}
      </ErrorBoundary>
    </Flex>
  );
};
