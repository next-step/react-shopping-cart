import styled from 'styled-components';

import { ListItem } from 'components/ListItem';
import useProductList from 'hooks/useProductsList';

const ProductList = () => {
  const { products, isLoading } = useProductList();

  if (isLoading) {
    return <div>로딩중...</div>;
  }

  return (
    <Layout>
      {!isLoading &&
        products &&
        products.map((product) => (
          <ListItem key={product.id} price={product.price} image={product.image} name={product.name} />
        ))}
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
