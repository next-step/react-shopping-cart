import React, { useEffect, useState, memo } from "react";
import TotalPrice from "../../TotalPrice/TotalPrice";
import Button from "../../../common/Button/Button";
import { useAppSelector } from "../../../../hooks/storeHooks";
import useCart from "../../../../hooks/useCart";

export const OrderDisplaySection = () => {
  const cart = useAppSelector((state) => state.cart);
  const { getTotalAmount, getTotalPrice } = useCart();
  const totalAmount = getTotalAmount();
  const totalPrice = getTotalPrice();

  return (
    <TotalPrice title={"결제예상금액"} price={totalPrice}>
      <Button className="primary-button" onClick={() => alert("결제창 이동")}>
        주문하기({totalAmount}개)
      </Button>
    </TotalPrice>
  );
};

export default memo(OrderDisplaySection);
