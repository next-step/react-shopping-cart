import * as productApi from '@/api/product';
import useOnMounted from '@/hooks/useOnMounted';
import ProductCard from '../ProductCard.tsx';
import useHttp from '@/hooks/useHttp';

const Products = () => {
  const { sendRequest, loading, data } = useHttp(productApi.getAllProducts);
  const products = data as Product[];

  useOnMounted(() => {
    sendRequest();
  });

  return (
    <>
      <div className="grid py-300">
        {loading && <h2>Loading...</h2>}
        {products.map(ProductCard)}
      </div>
    </>
  );
};

export default Products;
