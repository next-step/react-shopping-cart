import * as productApi from '@/api/product';
import useHttp from '@/hooks/useHttp';
import useOnMounted from '@/hooks/useOnMounted';

import ProductCard from '../ProductCard';

const Products = () => {
  const {
    sendRequest,
    loading,
    data: products,
  } = useHttp(productApi.getPaginatedProducts);

  useOnMounted(() => {
    sendRequest({ start: 1, end: 10 });
  });

  return (
    <div className="product-container">
      <div className="grid py-300 gap-50">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
        {loading &&
          Array.from({ length: SINGLE_PAGE_SIZE }).map((_, index) => (
            <ProductCard key={index} />
          ))}
      </div>
    </div>
  );
};

export default Products;

const SINGLE_PAGE_SIZE = 20;
