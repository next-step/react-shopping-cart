import { useState } from 'react';
import { IProductTypes } from '../../@interface';

interface IProductListProp {
  data: Array<IProductTypes>;
}

const ProductList = ({ data }: IProductListProp) => {
  return (
    <main className="product-container">
      {data.map((item: IProductTypes) => (
        <div key={item.id}>
          <img src={item.imageUrl} alt={item.name} className="w-280 h-280" />
          <div className="flex justify-between w-280 p-5">
            <div className="product-info">
              <span className="product-info__name">{item.name}</span>
              <span className="product-info__price">{item.price}원</span>
            </div>
            <img src="assets/svgs/cart.svg" alt="장바구니" />
          </div>
        </div>
      ))}
    </main>
  );
};

export default ProductList;
