import * as Styled from './ProductDetailPage.styles';
import { ProductDetailItem } from 'common/components/Domain';
import { useAppSelector } from 'store';
import { Spinner, ErrorMessage } from 'common/components';

const ProductDetailPage = () => {
  const productStore = useAppSelector((state) => state.product);
  const products = productStore.productList.products;
  const status = productStore.status;

  if (status === 'Loading') {
    return <Spinner />;
  } else if (status === 'Fail') {
    return <ErrorMessage />;
  }

  return <Styled.Layout>{<ProductDetailItem products={products} />}</Styled.Layout>;
};

export default ProductDetailPage;
