import React from "react";
import { IProduct } from "../../types/types";
import cartIcon from "../../assets/svgs/cart.svg";

type TProductItem = {
  product: IProduct;
};

function ProductItem({ product: { name, price, imageUrl } }: TProductItem) {
  return (
    <div>
      {/* TODO: productThumbnail 나중에 빼기 */}
      <img className="w-280" src={imageUrl} alt={`${name} 미리보기 이미지`} />
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <span className="product-info__name">{name}</span>
          <span className="product-info__price">{price.toLocaleString()}원</span>
        </div>
        <img src={cartIcon} alt="장바구니에 담기" />
      </div>
    </div>
  );
}

export default ProductItem;
