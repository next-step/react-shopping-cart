import Button from "../../ComponentsPrototype/Button/Button";
import { useCartCountMutation } from "../../Hooks/MutateCartItem/CartCountMutation";
import Box from "../../ComponentsPrototype/Layout/Box";
import Flex from "../../ComponentsPrototype/Layout/Flex";
import { useCartItemDecreaseMutation } from "../../Hooks/MutateCartItem/CartCountMutation";
export const CartItemCounter = ({
  id,
  quantity,
}: {
  id: string;
  quantity: number;
}) => {
  const [CartItemIncreaseMutation] = useCartCountMutation();
  const CartItemDecreaseMutation = useCartItemDecreaseMutation();
  return (
    <Box className="flex flex-row  items-center w-28 h-13 border border-gray-300">
      <Box className="w-full">
        <input
          type="number"
          value={quantity}
          readOnly
          className="inline-block w-full border border-white text-center text-2xl focus:outline-none"
        />
      </Box>
      <Flex className="flex flex-col">
        <Button
          className="p-1 px-3 border border-gray-300 text-base cursor-pointer"
          onClick={() => {
            CartItemIncreaseMutation.mutate(id.toString());
          }}>
          ▲
        </Button>
        <Button
          className="p-1 px-3 border border-gray-300 text-base cursor-pointer"
          onClick={() => {
            CartItemDecreaseMutation.mutate(id.toString());
          }}>
          ▼
        </Button>
      </Flex>
    </Box>
  );
};
