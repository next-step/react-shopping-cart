import { OrderProduct } from "../../Types/types";
import Image from "../../ComponentsPrototype/Image/Image";
import Flex from "../../ComponentsPrototype/Layout/Flex";

export const OrderPaymentItem = ({ product }: { product: OrderProduct }) => {
  return (
    <Flex className="flex justify-start  border-b-2 border-thingray mb-2 pt-4 pb-4 gap-3">
      <Flex className="flex ">
        <Image src={product.imageUrl} className="w-36 aspect-square" />
      </Flex>
      <Flex className="flex flex-col">
        <li>{product.name}</li>
        <li>{product.quantity}개</li>
      </Flex>
    </Flex>
  );
};
