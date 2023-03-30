import * as Styled from './ProductDetail.styles';
import { ProductDetailItem } from 'components/domain/Product/DetailItem';
import { useProducts } from 'hooks';

const ProductDetailPage = () => {
  const { products } = useProducts();
  return (
    <Styled.Layout>
      <ProductDetailItem products={products} />
    </Styled.Layout>
  );
};

export default ProductDetailPage;
