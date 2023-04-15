import CartIcon from "../assets/svgs/cart.svg";
import { useNavigate } from "react-router-dom";
import { ROUTE_PATH } from "../constants/page";

export default function Product({ product }) {
  const navigate = useNavigate();

  function handleCartClick() {
    if (confirm("장바구니에 물건이 담겼습니다. 장바구니로 이동하시겠습니까?"))
      navigate(ROUTE_PATH.CART);
  }

  return (
    <div data-id={product.id}>
      <img src={product.imageUrl} alt={product.name} />
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <span className="product-info__name">{product.name}</span>
          <span className="product-info__price">{product.price}원</span>
        </div>
        <img src={CartIcon} alt="장바구니" onClick={handleCartClick} />
      </div>
    </div>
  );
}
