import { useCartItemDeleteAllMutation } from "../../Hooks/MutateCartItem/CartItemsDeleteAllMutation";
import Button from "../../ComponentsPrototype/Button/Button";

export const CartResetButton = () => {
  const CartItemsDeleteAllMutation = useCartItemDeleteAllMutation();

  return (
    <Button
      className="p-3.5 px-5.5 border border-gray-400"
      onClick={() => {
        CartItemsDeleteAllMutation.mutate();
      }}>
      초기화 버튼
    </Button>
  );
};
