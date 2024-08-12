import { OrderProduct } from "../../Types/types";
import { OrderItem } from "./OrderItem";
import Box from "../../ComponentsPrototype/Layout/Box";
import Flex from "../../ComponentsPrototype/Layout/Flex";
export const OrderDetailsList = ({
  orders,
  OrderId,
}: {
  orders: OrderProduct[];
  OrderId: number;
}) => {
  return (
    <>
      <Flex className="flex flex-col">
        <Box className="w-full p-8 px-12 flex items-center justify-between mt-12 text-xl bg-gray-100 border border-gray-400">
          주문번호 : {OrderId}
        </Box>
        <Box className="w-full">
          {orders.map((order: OrderProduct) => (
            <>
              <OrderItem order={order} key={order.id} />
            </>
          ))}
        </Box>
      </Flex>
    </>
  );
};
