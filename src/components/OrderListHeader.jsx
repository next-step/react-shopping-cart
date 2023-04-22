import { Link } from "react-router-dom";
import { ROUTE_PATH } from "../constants/page";

export default function OrderListHeader({ order }) {
  return (
    <div className="order-list__header">
      <span>주문번호: {order.id}</span>
      <Link to={ROUTE_PATH.PRODUCT_LIST}>
        <span className="order-list__span">상세보기 ></span>
      </Link>
    </div>
  );
}
