import CartIcon from "../assets/svgs/cart.svg";
import { Link } from "react-router-dom";
import { ROUTE_PATH } from "../constants/page";
import { maskingProductPrice } from "../utils/index";

export default function Product({ product }) {
  function handleCartClick(event) {
    if (!confirm("장바구니에 물건이 담겼습니다. 장바구니로 이동하시겠습니까?"))
      event.preventDefault();
  }

  return (
    <div data-id={product.id}>
      <img src={product.imageUrl} alt={product.name} />
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <span className="product-info__name">{product.name}</span>
          <span className="product-info__price">
            {maskingProductPrice(product.price)}원
          </span>
        </div>
        <Link to={ROUTE_PATH.CART} onClick={handleCartClick}>
          <img className="cart-icon" src={CartIcon} alt="장바구니" />
        </Link>
      </div>
    </div>
  );
}
