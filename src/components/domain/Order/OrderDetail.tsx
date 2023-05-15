import React from "react";
import PageTitle from "../../common/PageTitle/PageTitle";
import OrderItemList from "./ItemSection/index";
import TotalPrice from "../TotalPrice/TotalPrice";
import useCart from "../../../hooks/useCart";
import ListTitle from "../../common/ListTitle/ListTitle";

const OrderDetail = () => {
  const { getTotalPrice } = useCart();
  const totalPrice = getTotalPrice();

  return (
    <section className="cart-section">
      <PageTitle title={"주문내역상세"} />
      <div className="flex">
        <OrderItemList>
          <ListTitle title={"주문 번호"} quantity={0} />
        </OrderItemList>
        <TotalPrice title={"결제금액 정보"} price={totalPrice} />
      </div>
    </section>
  );
};

export default OrderDetail;
