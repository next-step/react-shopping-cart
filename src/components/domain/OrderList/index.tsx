import OrderListItem from '../OrderListItem';

const OrderList = () => {
  return (
    <div className="order-list">
      <div className="order-list__header">
        <span>주문번호: 1</span>
      </div>
      <OrderListItem />
    </div>
  );
};

export default OrderList;
