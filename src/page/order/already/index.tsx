import { Header } from "common/ui/header";
import "../order.css";
import OrderLeftSection from "./left-section";
import OrderRightSection from "./right-section";
import Nav from "components/nav";
import { useOrderList } from "hooks/order";
import { useEffect } from "react";

const OrderContent = () => {
  const { data, isError, isLoading } = useOrderList();

  useEffect(() => {
    if (isError) {
      console.error("Error fetching cart list:", isError);
      alert("Failed to load order list.");
      return;
    }

  }, [data, isError]);

  if (isLoading) {
    return <div className="flex justify-center my-20">Loading...</div>;
  }

  if (!data) {
    return (
      <div className="flex justify-center my-20">
        주문 상품이 존재 하지 않습니다.
      </div>
    );
  }

  const orderDetailList = data.map((v) => v.orderDetails).flat();

  return (
    <div className="flex">
      <OrderLeftSection orderList={orderDetailList} />
      <OrderRightSection orderList={orderDetailList} />
    </div>
  );
};

const OrderList = () => {
  return (
    <>
      <Nav />
      <section className="order-section">
        <Header title={"주문/결제"} />
        <OrderContent />
      </section>
    </>
  );
};

export default OrderList;
