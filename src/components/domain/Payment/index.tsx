import { Header } from '@/components/common';
import {
  PaymentListSection,
  PaymentTotalDisplaySection,
} from '@/components/domain';
import useHttp from '@/hooks/useHttp';
const Payment = () => {
  return (
    <section className="order-section">
      <Header title="주문/결제" />
      <div className="flex">
        <PaymentListSection />
        <PaymentTotalDisplaySection />
      </div>
    </section>
  );
};

export default Payment;
