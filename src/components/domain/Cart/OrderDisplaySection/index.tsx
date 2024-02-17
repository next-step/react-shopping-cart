import React, { memo } from "react";
import TotalPrice from "../../TotalPrice/TotalPrice";
import Button from "../../../common/Button/Button";
import useCart from "../../../../hooks/useCart";
import useModal from "../../../../hooks/useModal";
import { usePayssion, Payssion } from "payssion";

export const OrderDisplaySection = () => {
  const { getTotalAmount, getTotalPrice, disableOrder } = useCart();
  const { openModal } = useModal();
  const totalAmount = getTotalAmount();
  const totalPrice = getTotalPrice();
  const modalType = "order";
  const { isOpen } = usePayssion();

  const handleOrderButtonClick = () => {
    disableOrder(totalAmount === 0);
    openModal(modalType);
  };

  return (
    <TotalPrice title={"결제예상금액"} price={totalPrice}>
      <Button className="primary-button" onClick={handleOrderButtonClick}>
        주문하기({totalAmount}개)
      </Button>
      {isOpen && <Payssion />}
    </TotalPrice>
  );
};

export default memo(OrderDisplaySection);
