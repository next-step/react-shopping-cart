import styled from 'styled-components';
import { ProductDetailItem } from 'components/Product/DetailItem';
import { useProducts } from 'hooks';

const ProductDetail = () => {
  const { products } = useProducts();
  return (
    <Layout>
      <ProductDetailItem products={products} />
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  padding: 24px 300px;
`;

export default ProductDetail;
