import * as Styled from './ProductListPage.styles';
import uuid from 'react-uuid';
import { Spinner, ErrorMessage } from 'components/common';
import Pagination from 'components/domain/Product/Pagination';
import ProductItem from 'components/domain/Product/Item';
import useProductListPage from 'pages/ProductList/useProductListPage';

const ProductListPage = () => {
  const { products, status, totalPage } = useProductListPage();

  if (status === 'Loading') {
    return <Spinner />;
  } else if (status === 'Fail') {
    return <ErrorMessage />;
  }
  return (
    <div>
      <Styled.Grid>
        {products?.map((product) => (
          <ProductItem key={uuid()} price={product.price} image={product.image} name={product.name} id={product.id} />
        ))}
      </Styled.Grid>
      <Pagination totalPage={totalPage} />
    </div>
  );
};

export default ProductListPage;
