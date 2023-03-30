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
  align-items: center;
  justify-content: center;
  margin: 50px;
`;

export default ProductDetail;
