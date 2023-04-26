import * as Styled from './ProductListPage.styles';
import uuid from 'react-uuid';
import { Spinner, ErrorMessage, Pagination, Dialog } from 'common/components';
import { ProductItem } from 'domain/components';
import { usePagination, useDialog } from 'common/hooks';
import { useAppDispatch, useAppSelector } from 'store';
import { useEffect } from 'react';
import { getProductList } from 'domain/store/feature/product/productslice';

const ProductListPage = () => {
  const { currentPage } = usePagination();
  const { dialogTitle, isOpenDialog } = useDialog();
  const dispatch = useAppDispatch();
  const productStore = useAppSelector((state) => state.productReducer);
  const products = productStore.productList.products;
  const status = productStore.status;
  const totalPage = productStore.productList.TOTAL_PAGE;

  useEffect(() => {
    dispatch(getProductList(currentPage));
  }, [currentPage]);

  if (status === 'Loading') {
    return <Spinner />;
  } else if (status === 'Fail') {
    return <ErrorMessage />;
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
