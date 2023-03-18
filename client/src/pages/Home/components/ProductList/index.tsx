import { useFetch } from 'hooks';

import Skeleton from './Skeleton';
import Product from '../Product';

import { IProduct } from 'types/product';
import { API } from 'constants/api';

function ProductList() {
  const { data: products = [], isLoading } = useFetch<IProduct[]>({ url: API.PRODUCTS });

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <section className="product-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductList;
