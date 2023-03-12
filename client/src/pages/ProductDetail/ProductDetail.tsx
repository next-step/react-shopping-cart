import styled from 'styled-components';
import { ListDetailItem } from 'components/ListDetailItem';

const ProductDetailPage = () => {
  return (
    <Container>
      <ListDetailItem />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export default ProductDetailPage;
