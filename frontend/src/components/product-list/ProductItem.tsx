import { useNavigate } from "react-router-dom";

import cart from "../../assets/svgs/cart.svg";

import Image from "../ui/Image";

import useCartListMutation from "../../quires/useCartListMutation";

import { ProductDetail } from "../../types";

import priceFormat from "../../utils/PriceFormat";

type ProductItemProps = {
  product: ProductDetail;
};

export default function ProductItem({ product }: ProductItemProps) {
  const { mutate } = useCartListMutation();

  const navigate = useNavigate();

  const handleClickProductItem = () => {
    navigate(`/products/${product.id}`);
  };

  const handleAddProductToCart = () => {
    confirm("장바구니에 추가되었습니다.");
    mutate(product);
  };

  return (
    <div>
      <div onClick={handleClickProductItem}>
        <Image variant="default" src={product.imageUrl} alt={product.name} />
      </div>
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <span className="product-info__name">{product.name}</span>
          <span className="product-info__price">
            {priceFormat(product.price)}원
          </span>
        </div>
        <button type="button" onClick={handleAddProductToCart}>
          <img src={cart} alt="장바구니" />
        </button>
      </div>
    </div>
  );
}
