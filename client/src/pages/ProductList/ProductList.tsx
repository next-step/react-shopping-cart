import styled from 'styled-components';
import uuid from 'react-uuid';

import { ProductItem } from 'components/Product/Item';
import useProducts from 'hooks/useProducts';

const ProductList = () => {
  const { products, status } = useProducts();

  if (status === 'Loading') {
    return <div>로딩중...</div>;
  }

  return (
    <Layout>
      {products?.map((product) => (
        <ProductItem key={uuid()} price={product.price} image={product.image} name={product.name} id={product.id} />
      ))}
    </Layout>
  );
};

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 30px;
  margin: 50px 100px;
`;

export default ProductList;
