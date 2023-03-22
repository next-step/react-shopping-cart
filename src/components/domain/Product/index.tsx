import * as productApi from '@/api/product';
import useOnMounted from '@/hooks/useOnMounted';
import ProductCard from '../ProductCard';
import useHttp from '@/hooks/useHttp';

const Products = () => {
  const {
    sendRequest,
    loading,
    data: products,
  } = useHttp(productApi.getAllProducts);

  useOnMounted(() => {
    sendRequest();
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
