import { order } from "../../Types/types";
import { OrderList } from "./OrderList";

export const OrdersList = ({ data }: { data: order[] }) => {
  return (
    <>
      {data.map((orderlist) => (
        <OrderList key={orderlist.id} orderlist={orderlist} />
      ))}
    </>
  );
};
