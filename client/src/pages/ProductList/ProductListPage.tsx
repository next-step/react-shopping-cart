import * as Styled from './ProductListPage.styles';

import uuid from 'react-uuid';

import ProductItem from 'components/domain/Product/Item';
import { Spinner } from 'components/common';

import useProducts from 'hooks/useProductList';

const ProductListPage = () => {
  const { products, status } = useProducts();

  if (status === 'Loading') {
    return <Spinner />;
  }

  return (
    <Styled.Layout>
      {products?.map((product) => (
        <ProductItem key={uuid()} price={product.price} image={product.image} name={product.name} id={product.id} />
      ))}
    </Styled.Layout>
  );
};

export default ProductListPage;
