import * as Styled from './ProductDetailPage.styles';
import ProductDetailItem from 'components/domain/Product/DetailItem';
import { useProductList } from 'hooks';
import { ErrorMessage, Spinner } from 'components/common';

const ProductDetailPage = () => {
  const { products, status } = useProductList();

  if (status === 'Loading') {
    return <Spinner />;
  } else if (status === 'Fail') {
    return <ErrorMessage />;
  }

  return (
    <Styled.Layout>
      <ProductDetailItem products={products} />
    </Styled.Layout>
  );
};

export default ProductDetailPage;
