import { Header } from "common/ui/header";
import "../order.css";
import OrderLeftSection from "./left-section";
import OrderRightSection from "./right-section";
import Nav from "components/nav";
import { useRecoilValue } from "recoil";
import { tempCartState } from "hooks/cart";

const OrderContent = () => {
  const orderList = useRecoilValue(tempCartState);

  if (orderList.length === 0) {
    return <div className="flex justify-center my-20">주문 상품이 존재 하지 않습니다.</div>;
  }
  return (
    <div className="flex">
      <OrderLeftSection orderList={orderList} />
      <OrderRightSection orderList={orderList} />
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
