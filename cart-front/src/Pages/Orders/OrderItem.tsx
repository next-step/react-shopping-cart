import { orderDetails } from "../../Types/types";
import Box from "../../ComponentsPrototype/Layout/Box";
import Image from "../../ComponentsPrototype/Image/Image";
import Flex from "../../ComponentsPrototype/Layout/Flex";
import Text from "../../ComponentsPrototype/Text/Text";
import { Link } from "@tanstack/react-router";

export const OrderItem = ({ order }: { order: orderDetails }) => {
  const { imageUrl, name, price, quantity } = order;
  return (
    <Box className=" flex justify-between w-full py-5 px-10 bg-white border border-gray-400 ">
      <Flex className="flex flex-row gap-3 ">
        <Flex>
          <Image src={imageUrl} className="w-36 aspect-square" />
        </Flex>
        <Flex className="flex-col gap-1">
          <Flex className="flex flex-row mb-5">
            <Text text={`${name}`} />
          </Flex>
          <Flex className="flex flex-row gap-3.5">
            <Text text={`${price}`} className="text-gray-500" />
            <Text text={"/"} className="text-gray-500" />
            <Text text={`수량:${quantity}개`} className="text-gray-500" />
          </Flex>
        </Flex>
      </Flex>
      <Flex>
        <Link to="/Cart" onClick={() => console.log("post cart")}>
          <button className="flex-center self-start flex bg-teal-500 text-xl text-white py-3.5 px-7">
            장바구니
          </button>
        </Link>
      </Flex>
    </Box>
  );
};
