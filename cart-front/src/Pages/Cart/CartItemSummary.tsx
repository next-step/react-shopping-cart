import Text from "../../ComponentsPrototype/Text/Text";
import Divider from "../../ComponentsPrototype/Divider/Divider";
import { useQuery } from "@tanstack/react-query";
import { CartQueryOptions } from "../../routes/_Cart/Cart";
import { ErrorBoundary } from "react-error-boundary";

export const CartItemSummary = () => {
  const {
    data: { carts },
  } = useQuery(CartQueryOptions());
  return (
    <ErrorBoundary fallback={<div>cart item summary error</div>}>
      <div>
        <Text text={`든든 배송상품 (${carts.length})개`} className="mt-4" />
        <Divider className="w-full border border-gray-400" />
      </div>
    </ErrorBoundary>
  );
};
