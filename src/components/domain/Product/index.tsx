import * as productApi from '@/api/product';
import useOnMounted from '@/hooks/useOnMounted';
import ProductCard from '../ProductCard';
import useHttp from '@/hooks/useHttp';
import { PlaceHolder } from '@/components/common';

const Products = () => {
  const { sendRequest, loading, data } = useHttp(productApi.getAllProducts);
  const products = data as Product[];

  useOnMounted(() => {
    sendRequest();
  });

  return (
    <div className="product-container">
      <div className="grid py-300 gap-50">
        {products?.map(ProductCard)}
        {loading && (
          <PlaceHolder quantity={8} width={'250px'} height={'250px'} />
        )}
      </div>
    </div>
  );
};

export default Products;
