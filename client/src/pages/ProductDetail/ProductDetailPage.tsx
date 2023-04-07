import * as Styled from './ProductDetailPage.styles';
import { ProductDetailItem } from 'common/components/Domain';
import { useAppSelector } from 'store';

const ProductDetailPage = () => {
  const products = useAppSelector((state) => state.product.productList.products);

  return (
    <Styled.Layout>
      <ProductDetailItem products={products} />
    </Styled.Layout>
  );
};

export default ProductDetailPage;
