import React, { memo } from "react";
import TotalPrice from "../../TotalPrice/TotalPrice";
import Button from "../../../common/Button/Button";
import useCart from "../../../../hooks/useCart";
import { usePayssion, Payssion } from "payssion";
import { numberFormat } from "../../../../utils/numberFormat";
import { useNavigate } from "react-router-dom";

type InitiatePaymentParams = {
  amount: number;
  onSuccessAction: () => void;
};

export const PayDisplaySection = () => {
  const navigate = useNavigate();
  const { getTotalPrice } = useCart();
  const amount = getTotalPrice();
  const { isOpen } = usePayssion();
  const onSuccessAction = () => {
    alert("주문이 완료되었습니다");
    navigate("/payment");
    return;
  };
  const { initiatePayment } = usePayssion();

  const handleOrderButtonClick = () => {
    initiatePayment({ amount, onSuccessAction });
  };

  return (
    <TotalPrice title={"결제예상금액"} price={amount}>
      <Button className="primary-button" onClick={handleOrderButtonClick}>
        결제하기({numberFormat(amount)}개)
      </Button>
      {isOpen && <Payssion />}
    </TotalPrice>
  );
};

export default memo(PayDisplaySection);
