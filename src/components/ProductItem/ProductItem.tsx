import React from "react";
import cartIcon from "../../assets/svgs/cart.svg";
import { IProduct } from "../../domain/shopping-cart/types";

type TProductItemProps = {
  product: IProduct;
  onAddInCart: (product: IProduct) => void;
};

function ProductItem({ product, onAddInCart }: TProductItemProps) {
  const { name, price, imageUrl } = product;

  return (
    <div>
      <img className="w-280" src={imageUrl} alt={`${name} 미리보기 이미지`} />
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <span className="product-info__name">{name}</span>
          <span className="product-info__price">{price.toLocaleString()}원</span>
        </div>
        <img src={cartIcon} alt="장바구니에 담기" onClick={() => onAddInCart(product)} />
      </div>
    </div>
  );
}

export default ProductItem;
