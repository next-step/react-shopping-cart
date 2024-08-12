import { OrderProduct } from "../../Types/types";
import Text from "../../ComponentsPrototype/Text/Text";
import Box from "../../ComponentsPrototype/Layout/Box";
import Flex from "../../ComponentsPrototype/Layout/Flex";

export const OrderDetailFooter = ({ orders }: { orders: OrderProduct[] }) => {
  return (
    <Flex className="flex justify-end my-12">
      <Box className="w-480 h-480">
        <Flex>
          <Text text={"결제금액 정보"} className=" text-2xl" />
          <hr className="divide-line-thin mt-10 mb-15" />
        </Flex>
        <Flex className="flex justify-between mt-14">
          <Text text={"총 결제금액"} className=" text-2xl" />
          <Text
            className=" text-2xl"
            text={`₩${orders
              .reduce((acc: number, order: OrderProduct) => {
                return acc + Number(order.price) * Number(order.quantity);
              }, 0)
              .toLocaleString()}`}
          />
        </Flex>
      </Box>
    </Flex>
  );
};
