import { Order } from "types/type";
import "../order.css";
import Nav from "components/nav";
import { useOrderList } from "hooks/order";
import OrderItem from "./list";
import { Header } from "common/ui/header";

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
const OrdeCompleateList = () => {
  return (
    <>
      <Nav />
      <Header title={'주문 목록'} />
      <OrderListContent />
    </>
  );
};

export default OrdeCompleateList;
