import Image from "../../ComponentsPrototype/Image/Image";
import Text from "../../ComponentsPrototype/Text/Text";
import CheckBox from "../../ComponentsPrototype/Checkbox/CheckBox";
import Button from "../../ComponentsPrototype/Button/Button";
import { useCheckMutation } from "../../Hooks/MutateCartItem/CheckMutation";
import { CartItemWithCheck } from "../../Types/types";
import Flex from "../../ComponentsPrototype/Layout/Flex";
import { TrashIcon } from "../../Components/CartIcon/TrashIcon";
import { CartItemCounter } from "./CartItemCounter";
import Box from "../../ComponentsPrototype/Layout/Box";
import { useCartItemDeleteMutation } from "../../Hooks/MutateCartItem/CartItemDeleteMutation";
const CartItem = ({ item }: { item: CartItemWithCheck }) => {
  const {
    done,
    product: { name, imageUrl, price },
    id,
    quantity,
  } = item;
  const [deleteCartItem] = useCartItemDeleteMutation();
  const [CheckMutation] = useCheckMutation();

  return (
    <Flex className="flex justify-between  border-b-2 border-thingray mb-2 pt-4 pb-4">
      <Flex className="flex flex-row gap-3">
        <CheckBox
          flag={done}
          handleChange={() => {
            CheckMutation.mutate(id.toString());
          }}
        />
        <Image src={imageUrl} className="w-36 aspect-square" />
        <Text text={name} />
      </Flex>
      <Flex className="flex flex-col items-end gap-4">
        <Button
          onClick={() => {
            deleteCartItem.mutate(item.id.toString());
          }}>
          <TrashIcon />
        </Button>
        <CartItemCounter quantity={quantity} id={id.toString()} />
        <Box>
          <Text text={price.toString()} className="text-thingray" />
        </Box>
      </Flex>
    </Flex>
  );
};

export default CartItem;
