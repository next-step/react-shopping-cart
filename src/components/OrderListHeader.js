export default function OrderListHeader({ order }) {
  return (
    <div className="order-list__header">
      <span>주문번호: {order.id}</span>
      <span>상세보기 ></span>
    </div>
  );
}
