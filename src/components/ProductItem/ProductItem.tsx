import React from 'react';
import cartIcon from '../../assets/svgs/cart.svg';
import { IProduct } from '../../domain/shopping-cart/types';
import { useCartContext } from '../../context/CartContext/CartContext';

type TProductItem = {
  product: IProduct;
};

function ProductItem({ product }: TProductItem) {
  const { name, price, imageUrl } = product;
  const {
    cartDataHandlers: { insertProduct },
  } = useCartContext();

  const handleAddingCartItem = (product: IProduct) => {
    if (!confirm(`${name}을 장바구니에 담으시겠습니까?`)) {
      return;
    }

    insertProduct({ ...product, checked: true });
  };

  return (
    <div>
      <img className="w-280" src={imageUrl} alt={`${name} 미리보기 이미지`} />
      <div className="flex justify-between w-280 p-5">
        <div className="product-info">
          <span className="product-info__name">{name}</span>
          <span className="product-info__price">{price.toLocaleString()}원</span>
        </div>
        <img src={cartIcon} alt="장바구니에 담기" onClick={() => handleAddingCartItem(product)} />
      </div>
    </div>
  );
}

export default ProductItem;
