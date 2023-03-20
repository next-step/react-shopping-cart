import { Order } from "types/type";
import "../order.css";
import Nav from "components/nav";
import { useOrderList } from "hooks/order";
import OrderItem from "./list";

const OrderHeader = () => {
  return (
    <header className="flex-col-center mt-20">
      <h2 className="order-section__title">주문 목록</h2>
      <hr className="divide-line mt-20" />
    </header>
  );
};

const OrderListContent = () => {
  const { data: orders, isLoading, isError } = useOrderList();

  if (!orders?.length) {
    return <div>주문 내역이 없습니다.</div>;
  }

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  if (isError) {
    return <div>에러가 발생했습니다.</div>;
  }

  return (
    <section className="order-section">
      {orders.map(({ id, orderDetails }: Order) => {
        return (
          <OrderItem
            id={id}
            orderDetails={orderDetails}
            key={"orderItem" + (id)}
          />
        );
      })}
    </section>
  );
};
const OrdeList = () => {
  return (
    <>
      <Nav />
      <OrderHeader />
      <OrderListContent />
    </>
  );
};

export default OrdeList;
