// TODO : 재사용성으로 components로 분류했는데 공통 레이아웃 관련파일은 어떻게 분류?
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../constants/page";

export default function Header() {
  const navigate = useNavigate();

  return (
    <nav className="nav flex justify-around">
      <div className="flex-center">
        <h1
          className="nav-title"
          onClick={() => navigate(ROUTE_PATH.PRODUCT_LIST)}
        >
          CLEAN CODE SHOP
        </h1>
      </div>
      <div className="flex gap-15">
        <button
          className="nav-button"
          onClick={() => navigate(ROUTE_PATH.CART)}
        >
          장바구니
        </button>
        <button
          className="nav-button"
          onClick={() => navigate(ROUTE_PATH.ORDER_LIST)}
        >
          주문목록
        </button>
      </div>
    </nav>
  );
}
