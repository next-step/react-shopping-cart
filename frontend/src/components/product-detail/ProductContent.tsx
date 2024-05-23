import { useNavigate } from "react-router-dom";

import useCartListMutation from "../../quires/useCartListMutation";

import { ProductDetail } from "../../types";

import priceFormat from "../../utils/PriceFormat";

type ProductContentProps = {
  product: ProductDetail;
};

export default function ProductContent({ product }: ProductContentProps) {
  const { mutate } = useCartListMutation();
  const navigate = useNavigate();

  const handleAddProductToCart = () => {
    confirm("장바구니에 추가되었습니다.");
    mutate(product);
    navigate("/cart");
  };

  return (
    <div className="product-detail-container">
      <div className="flex-col-center w-520">
        <img className="mb-10" src={product.imageUrl} alt={product.name} />
        <div className="product-detail-info">
          <span className="product-detail-info__name">{product.name}</span>
          <hr className="divide-line-gray my-20" />
          <div className="flex justify-between">
            <span>금액</span>
            <span className="product-detail-info__price">
              {priceFormat(product.price)}원
            </span>
          </div>
        </div>
        <button
          className="product-detail-button flex-center mt-20"
          onClick={handleAddProductToCart}
        >
          장바구니
        </button>
      </div>
    </div>
  );
}
