import Title from "../components/ui/Title";
import OrderPayList from "../components/order-pay-list/OrderPayList";
import OrderPaySection from "../components/order-pay-list/OrderPaySection";

export default function OrderPayListPage() {
  return (
    <section className="order-section">
      <Title variant="order" text="주문/결제" />
      <div className="flex">
        <OrderPayList />
        <OrderPaySection />
      </div>
    </section>
  );
}
