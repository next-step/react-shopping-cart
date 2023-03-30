import * as Styled from './ProductDetailPage.styles';
import ProductDetailItem from 'components/domain/Product/DetailItem';
import { useProductList } from 'hooks';

const ProductDetailPage = () => {
  const { products } = useProductList();
  return (
    <Styled.Layout>
      <ProductDetailItem products={products} />
    </Styled.Layout>
  );
};

export default ProductDetailPage;
