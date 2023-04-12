import { Button, Divider, Text } from '@/components/common';
import { currency } from '@/utils/filter/currency';

type Props = {
  totalPrice: number;
  onClickPayment: () => void;
};

const PaymentTotalDisplaySection = ({ totalPrice, onClickPayment }: Props) => {
  return (
    <section className="order-right-section">
      <div className="order-right-section__top">
        <Text as="h3" className="order-title">
          총 결제금액
        </Text>
      </div>
      <Divider type="thin" />
      <div className="order-right-section__bottom">
        <div className="flex justify-between p-20 mt-20">
          <Text>총 결제금액</Text>
          <Text highlight>{currency(totalPrice)}</Text>
        </div>
        <div className="flex-center mt-30 mx-10">
          <Button theme="primary" onClick={onClickPayment}>
            {currency(totalPrice)} 결제하기
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PaymentTotalDisplaySection;
