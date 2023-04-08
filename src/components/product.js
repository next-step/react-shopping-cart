import CartIcon from "../assets/svgs/cart.svg";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../constants/page";

export default function Product({ id, name, price, imageUrl }) {
  function handleCartClick() {
    if (confirm("장바구니에 물건이 담겼습니다. 장바구니로 이동하시겠습니까?"))
      useNavigate(ROUTE_PATH.CART);
  }

  return (
    <div data-id={id}>
      <img src={imageUrl} alt={name} />
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <span className="product-info__name">{name}</span>
          <span className="product-info__price">{price}원</span>
        </div>
        <img src={CartIcon} alt="장바구니" onClick={() => handleCartClick()} />
      </div>
    </div>
  );
}
