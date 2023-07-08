import React, { PropsWithChildren } from "react";
import { SectionHeader } from "../../components/SectionHeader";

function OrderTemplate({ children }: PropsWithChildren) {
  return (
    <section className="order-section">
      <SectionHeader title="주문 목록" />
      {children}
    </section>
  );
}

export default OrderTemplate;
