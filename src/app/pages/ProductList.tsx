import { useEffect, useState } from 'react';
import { IProductTypes } from '../../@interface';
import styled from 'styled-components';
import { getJSONData, setJSONData } from '../../utils/localStorage';
import { getAllProducts } from '../../api/product';
import { LOCALSTORAGE } from '../../constants/dataKey';

const ActivedImg = styled.img`
  cursor: pointer;
`;

interface IProductListProp {}

const ProductList = ({}) => {
  const [data, setData] = useState(getJSONData(LOCALSTORAGE.PRODUCT));
  if (data.length === 0) {
    getAllProducts().then((res) => {
      setJSONData(LOCALSTORAGE.PRODUCT, res);
      setData(res);
    });
  }

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
            <ActivedImg src="assets/svgs/cart.svg" alt="장바구니" data-id={item.id} />
          </div>
        </div>
      ))}
    </main>
  );
};

export default ProductList;
