import React from "react";
import { OrderDetail } from "types/type";

const DEFAULT_QUANTITY = 1;

type OrderLeftSectionProps = {
  orderList: OrderDetail[];
};

const OrderLeftSection = ({ orderList }: OrderLeftSectionProps) => {
  if (!orderList.length) return <></>;

  const orderQuantity = (item: OrderDetail) => {
    return item?.quantity ? item.quantity : DEFAULT_QUANTITY;
  };

  return (
    <section className="order-left-section">
      <h3 className="order-title">{`주문 상품(${orderList.length}건)`}</h3>
      <hr className="divide-line-gray mt-10" />
      {orderList.map((item) => (
        <React.Fragment key={item.id}>
          <div className="order-container">
            <div className="flex gap-15 mt-10">
              <img
                className="w-144 h-144"
                src={item.imageUrl}
                alt={`${item.name}`}
              />
              <div className="flex-col gap-15">
                <span className="order-name">{item.name}</span>
                <span>수량: {orderQuantity(item)}</span>
              </div>
            </div>
          </div>
          <hr className="divide-line-thin mt-10" />
        </React.Fragment>
      ))}
    </section>
  );
};

export default OrderLeftSection;
