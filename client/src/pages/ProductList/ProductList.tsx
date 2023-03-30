import * as Styled from './ProductList.styles';

import uuid from 'react-uuid';

import { ProductItem } from 'components/domain/Product/Item';
import useProducts from 'hooks/useProducts';

const ProductList = () => {
  const { products, status } = useProducts();

  if (status === 'Loading') {
    return <div>로딩중...</div>;
  }

  return (
    <Styled.Layout>
      {products?.map((product) => (
        <ProductItem key={uuid()} price={product.price} image={product.image} name={product.name} id={product.id} />
      ))}
    </Styled.Layout>
  );
};

export default ProductList;
