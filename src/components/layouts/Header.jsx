// TODO : 재사용성으로 components로 분류했는데 공통 레이아웃 관련파일은 어떻게 분류?
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "../../constants/page";

export default function Header() {
  return (
    <nav className="nav flex justify-around">
      <Link className="flex-center" to={ROUTE_PATH.PRODUCT_LIST}>
        <h1 className="nav-title">CLEAN CODE SHOP</h1>
      </Link>
      <div className="flex gap-15">
        <Link className="flex-center" to={ROUTE_PATH.CART}>
          <button className="nav-button">장바구니</button>
        </Link>
        <Link className="flex-center" to={ROUTE_PATH.ORDER}>
          <button className="nav-button">주문목록</button>
        </Link>
      </div>
    </nav>
  );
}
