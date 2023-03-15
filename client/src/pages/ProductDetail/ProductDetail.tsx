import styled from 'styled-components';
import { ListDetailItem } from 'components/ListDetailItem';

const ProductDetail = () => {
  return (
    <Layout>
      <ListDetailItem />
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
