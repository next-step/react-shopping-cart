import { use } from 'react';
import { getProduct } from '@/api/product';

const Products = () => {
  const products = use<Product[]>(getProduct);
  return (
    <>
      {products &&
        products.map((product) => (
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
