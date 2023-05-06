import * as Styled from './ProductListPage.styles';
import uuid from 'react-uuid';
import { Spinner, ErrorMessage, Pagination, Dialog } from 'common/components';
import { ProductItem } from 'domain/components';
import useProductPage from '../hooks/useProductPage';

const ProductListPage = () => {
  const { status, isOpenDialog, dialogTitle, products, totalPage, errorMessage } = useProductPage();

  if (status === 'Loading') {
    return <Spinner />;
  } else if (status === 'Fail') {
    return <ErrorMessage>{errorMessage}</ErrorMessage>;
  }

  return (
    <div>
      <Dialog isOpen={isOpenDialog} title={dialogTitle} />
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
