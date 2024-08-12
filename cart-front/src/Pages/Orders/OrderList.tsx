import Box from "../../ComponentsPrototype/Layout/Box";
import Text from "../../ComponentsPrototype/Text/Text";
import { order } from "../../Types/types";
import { orderDetails } from "../../Types/types";
import { OrderItem } from "./OrderItem";
import { Link } from "@tanstack/react-router";
import Flex from "../../ComponentsPrototype/Layout/Flex";

export const OrderList = ({ orderlist }: { orderlist: order }) => {
  return (
    <Flex>
      <Box className="w-full p-8 px-12 flex items-center justify-between mt-12 text-xl bg-gray-100 border border-gray-400">
        <Flex className="flex flex-row justify-between w-full">
          <Flex>
            <Text text={`주문번호 ${orderlist.id}`} />
          </Flex>
          <Flex>
            <Link to={`/OrderDetails/${orderlist.id}`}>
              <button>
                <Flex className="w-full flex item-center justify-center gap-1">
                  <span className="flex items-center justify-center">
                    상세보기
                  </span>
                  <span className="mb-1">{">"}</span>
                </Flex>
              </button>
            </Link>
          </Flex>
        </Flex>
      </Box>
      {orderlist.orderDetails.map((order: orderDetails) => (
        <OrderItem order={order} />
      ))}
    </Flex>
  );
};
