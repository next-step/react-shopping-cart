import React, { memo } from "react";
import TotalPrice from "../../TotalPrice/TotalPrice";
import Button from "../../../common/Button/Button";
import useCart from "../../../../hooks/useCart";
import useModal from "../../../../hooks/useModal";

export const OrderDisplaySection = () => {
  const { getTotalAmount, getTotalPrice, disableOrder } = useCart();
  const { openModal } = useModal();
  const totalAmount = getTotalAmount();
  const totalPrice = getTotalPrice();
  const modalType = "order";

  const handleOrderButtonClick = () => {
    disableOrder(totalAmount === 0);
    openModal(modalType);
  };

  return (
    <TotalPrice title={"결제예상금액"} price={totalPrice}>
      <Button className="primary-button" onClick={handleOrderButtonClick}>
        주문하기({totalAmount}개)
      </Button>
    </TotalPrice>
  );
};

export default memo(OrderDisplaySection);
