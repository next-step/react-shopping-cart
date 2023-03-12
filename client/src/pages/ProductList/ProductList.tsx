import styled from 'styled-components';

import { NavBar } from 'components/NavBar';
import { ListItem } from 'components/ListItem';

const ProductListPage = () => {
  return (
    <div>
      <NavBar />
      <Container>
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </Container>
    </div>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 240px;
`;

export default ProductListPage;
