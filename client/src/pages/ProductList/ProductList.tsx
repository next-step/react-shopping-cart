import styled from 'styled-components';

import { ListItem } from 'components/ListItem';

const ProductList = () => {
  return (
    <Layout>
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
      <ListItem />
    </Layout>
  );
};

const Layout = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 50px 240px;
`;

export default ProductList;
