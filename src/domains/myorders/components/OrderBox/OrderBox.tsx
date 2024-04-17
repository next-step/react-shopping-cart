import { Link } from "@tanstack/react-router";
import OrderProductRowCard from "../../../shared/components/domained/OrderProductRowCard/OrderProductRowCard";
import { Order } from "../../../shared/queryHook/orders/orders.type";
import {
  alinkReset,
  buttonBox,
  orderContainer,
  orderHeader,
  orderProductBox,
} from "./OrderBox.css";
import Button from "../../../shared/components/primitive/Button/Button";
import { useAddProductToCart } from "../../../shared/queryHook/carts/carts.query";
import Text from "../../../shared/components/primitive/Text/Text";

interface OrderBox {
  id: number;
  orders: Order[];
}

export default function OrderBox({ id, orders }: OrderBox) {
  const { mutate } = useAddProductToCart();

  return (
    <div className={orderContainer}>
      <div className={orderHeader}>
        <Text as="description">{`주문번호: ${id}`}</Text>
        <Link
          className={alinkReset}
          to="/myorders/$orderId"
          params={{ orderId: id.toFixed() }}
        >
          <Text as="description">{"상세보기>"}</Text>
        </Link>
      </div>

      {orders.map((order) => (
        <div key={order.id} className={orderProductBox}>
          <OrderProductRowCard
            imgSrc={order.imageUrl}
            title={order.name}
            quantity={order.quantity}
            price={order.price}
          />
          <div className={buttonBox}>
            <Button
              appearance="primary"
              onClick={() =>
                mutate(order, {
                  onSuccess() {
                    alert("카트 이동 성공");
                  },
                })
              }
            >
              장바구니
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
