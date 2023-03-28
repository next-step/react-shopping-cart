import { useFetch } from 'hooks';

import ProductItem from '../ProductItem';

import { fetchProducts } from 'api';
import { Product } from 'types/product';

const CACHE_KEY = 'products';

function ProductList() {
  const { data: products = [] } = useFetch<Product[]>({
    fetcher: fetchProducts,
    cacheKey: CACHE_KEY,
  });

  return (
    <section className="product-container">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </section>
  );
}

export default ProductList;
