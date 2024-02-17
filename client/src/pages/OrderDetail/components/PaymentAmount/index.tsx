interface PaymentAmountProps {
  totalPrice: number;
}

function PaymentAmount({ totalPrice }: PaymentAmountProps) {
  return (
    <div className="order-detail-container w-full">
      <div className="w-480">
        <span className="order-detail-title">결제금액 정보</span>
        <hr className="divide-line-thin my-20" />
        <div className="flex justify-between">
          <span className="highlight-text">총 결제금액</span>
          <span className="highlight-text">{totalPrice.toLocaleString('ko')}원</span>
        </div>
      </div>
    </div>
  );
}

export default PaymentAmount;
