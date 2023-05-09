import React, { useEffect, useState } from "react";
import TotalPrice from "../../TotalPrice/TotalPrice";
import Button from "../../../common/Button/Button";
import { useAppSelector } from "../../../../hooks/storeHooks";

export const OrderDisplaySection = () => {
  const cart = useAppSelector((state) => state.cart);
  const [orderQuantity, setOrderQuantity] = useState(0);
  const [orderPrice, setOrderPrice] = useState(0);

  useEffect(() => {
    cart.products.forEach((product) => {
      setOrderPrice(orderPrice + product.price);
    });
  }, [orderPrice, orderQuantity]);

  return (
    <TotalPrice title={"결제예상금액"} price={0}>
      <Button
        className="primary-button"
        paren={orderQuantity}
        onClick={() => alert("결제창 이동")}
      >
        장바구니
      </Button>
    </TotalPrice>
  );
};

export default OrderDisplaySection;
