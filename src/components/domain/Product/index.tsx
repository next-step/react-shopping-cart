import * as productApi from '@/api/product';
import useOnMounted from '@/hooks/useOnMounted';
import ProductCard from '../ProductCard';
import useHttp from '@/hooks/useHttp';

const Products = () => {
  const { sendRequest, loading, data } = useHttp(productApi.getAllProducts);
  const products = data as Product[];

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
          Array.from({ length: 20 }).map((_, index) => (
            <ProductCard key={index} />
          ))}
      </div>
    </div>
  );
};

export default Products;
