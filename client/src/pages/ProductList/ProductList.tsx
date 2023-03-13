import styled from 'styled-components';

import { ListItem } from 'components/ListItem';

const ProductList = () => {
  return (
    <Container>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />

      <ListItem />

      <ListItem />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 240px;
`;

export default ProductList;
