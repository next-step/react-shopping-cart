import { maskingProductPrice } from "../utils/index";

export default function OrderListItem({ orderDetail }) {
  return (
    <div className="order-list-item">
      <div className="flex gap-15 mt-10">
        <img
          className="w-144 h-144"
          src={orderDetail.imageUrl}
          alt={orderDetail.name}
        />
        <div className="flex-col gap-15">
          <span className="order-name">{orderDetail.name}</span>
          <span className="order-info">
            {maskingProductPrice(orderDetail.price)}원 / 수량:{" "}
            {orderDetail.quantity}개
          </span>
        </div>
      </div>
      <button className="primary-button-small flex-center self-start">
        장바구니
      </button>
    </div>
  );
}
