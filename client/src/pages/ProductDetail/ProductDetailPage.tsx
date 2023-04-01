import * as Styled from './ProductDetailPage.styles';
import ProductDetailItem from 'components/domain/Product/DetailItem';
import { useProductList } from 'hooks';
import { Spinner } from 'components/common';

const ProductDetailPage = () => {
  const { products, status } = useProductList();

  if (status === 'Loading') {
    return <Spinner />;
  }

  return (
    <Styled.Layout>
      <ProductDetailItem products={products} />
    </Styled.Layout>
  );
};

export default ProductDetailPage;
