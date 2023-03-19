import * as productApi from '@/api/product';
import useOnMounted from '@/hooks/useOnMounted';
import ProductCard from '../ProductCard';
import useHttp from '@/hooks/useHttp';
import ProductPlaceHolder from '../ProductPlaceHolder';

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
        {loading &&
          Array.from({ length: PLACE_HOLDER_PRODUCT }).map(ProductPlaceHolder)}
      </div>
    </div>
  );
};

export default Products;

const PLACE_HOLDER_PRODUCT = 20;
