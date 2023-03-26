import { OrderDetail } from "types/type";
import DetailItem from "../detail";

type OrderListHeaderProps = {
  id: number;
};

const OrderListHeader = ({ id }: OrderListHeaderProps) => {
  return (
    <div className="order-list__header">
      <span>주문번호: {id}</span>
      <span>상세보기 &lt;</span>
    </div>
  );
};

type OrderItemProps = {
  id: number;
  orderDetails: OrderDetail[];
};

const OrderItem = ({ id, orderDetails }: OrderItemProps) => {
  return (
    <div className="order-list">
      <OrderListHeader id={id} />
      {orderDetails.map((detailItem: OrderDetail) => {
        return (
          <DetailItem
            detailItem={detailItem}
            key={"detail" + (detailItem.id + 1)}
          />
        );
      })}
    </div>
  );
};

export default OrderItem;
