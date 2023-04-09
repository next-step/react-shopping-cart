import { useEffect, useState } from 'react';
import { IProductTypes } from '../../@interface';
import styled from 'styled-components';
import { getJSONData, setJSONData } from '../../utils/localStorage';
import { getAllProducts } from '../../api/product';
import { LOCALSTORAGE } from '../../constants/dataKey';
import ProductBox from '../components/product/ProductBox';

const ProductList = () => {
  const [data, setData] = useState<IProductTypes[]>(getJSONData(LOCALSTORAGE.PRODUCT));
  useEffect(() => {
    getAllProducts().then((res) => {
      setJSONData(LOCALSTORAGE.PRODUCT, res);
      setData(res);
    });
  }, []);

  return (
    <main className="product-container">
      {data.map(({ id, imageUrl, name, price }: IProductTypes) => (
        <ProductBox key={id} id={id} price={price} name={name} imageUrl={imageUrl} />
      ))}
    </main>
  );
};

export default ProductList;
