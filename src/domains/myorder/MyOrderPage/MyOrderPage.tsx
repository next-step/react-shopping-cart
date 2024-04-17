import { useParams } from "@tanstack/react-router";
import OrderBox from "../../myorders/components/OrderBox/OrderBox";

import { useOrder } from "../../shared/queryHook/orders/orders.query";
import {
  container,
  priceBox,
  priceDetail,
  priceSection,
  section,
  titleContainer,
  underLine,
} from "./MyOrderPage.css";
import Text from "../../shared/components/primitive/Text/Text";

export default function MyOrderPage() {
  const { orderId } = useParams({ strict: false }) as { orderId: string };
  const { data } = useOrder(Number(orderId));

  if (!data?.response) return null;

  const { id, orderDetails } = data.response;

  const price = orderDetails.reduce((result, order) => {
    const total = result + order.price * order.quantity;
    return total;
  }, 0);

  return (
    <main className={container}>
      <section className={section}>
        <div className={titleContainer}>
          <Text as="subtitle">주문 목록</Text>
        </div>
        <div className={underLine}></div>
        <OrderBox id={id} orders={orderDetails} />
        <div className={priceSection}>
          <div className={priceBox}>
            <Text as="subtitle">결제금액 정보</Text>
            <div className={underLine}></div>
            <div className={priceDetail}>
              <div>총 결제금액</div>
              <div>{price.toLocaleString()} 원</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
