import { use } from 'react';
import * as productApi from '@/api/product';

const Products = () => {
  const products = use(productApi.getAllProducts());

  return (
    <>
      {products.map((product) => (
        <div key={product.id}>
          <div>{product.name}</div>
          <div>{product.price}</div>
          <img src={product.image} />
        </div>
      ))}
    </>
  );
};

export default Products;
