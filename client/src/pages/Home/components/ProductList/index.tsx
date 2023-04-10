import { IntersectionObserverArea } from 'components';

import { useProductList } from './hooks';

import ProductItem from '../ProductItem';

function ProductList() {
  const { products, fetchMore, hasNextPage, isLoading } = useProductList();

  const handleIntersect = () => {
    if (hasNextPage && !isLoading) {
      fetchMore();
    }
  };

  return (
    <section className="product-container">
      {products?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
      {products && <IntersectionObserverArea onIntersect={handleIntersect} />}
    </section>
  );
}

export default ProductList;
