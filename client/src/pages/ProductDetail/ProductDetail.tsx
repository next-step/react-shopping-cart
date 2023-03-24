import styled from 'styled-components';
import { ProductDetailItem } from 'components/Product/DetailItem';

const ProductDetail = () => {
  return (
    <Layout>
      <ProductDetailItem />
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
