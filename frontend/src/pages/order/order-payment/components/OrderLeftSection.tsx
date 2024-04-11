import { PropsWithChildren } from "react";

const OrderLeftSection = ({ children }: PropsWithChildren) => {
  return (
    <section className="order-left-section">
      <h3 className="order-title">주문 상품(3건)</h3>
      <hr className="divide-line-gray mt-10" />
      {children}
    </section>
  );
};

export default OrderLeftSection;
