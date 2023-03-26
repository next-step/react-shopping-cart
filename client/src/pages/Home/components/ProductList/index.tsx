import { useFetch } from 'hooks';

import Skeleton from './Skeleton';
import ProductItem from '../ProductItem';

import { fetchProducts } from 'api';
import { Product } from 'types/product';

const CACHE_KEY = 'products';

function ProductList() {
  const { data: products = [], isLoading } = useFetch<Product[]>({
    fetcher: fetchProducts,
    cacheKey: CACHE_KEY,
  });

  if (isLoading) {
    return <Skeleton />;
  }

  return (
    <section className="product-container">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductList;
