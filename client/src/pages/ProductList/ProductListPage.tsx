import * as Styled from './ProductListPage.styles';
import uuid from 'react-uuid';
import { Spinner, ErrorMessage, Pagination } from 'common/components';
import { ProductItem } from 'common/components/Domain';
import { usePagination } from 'common/hooks';
import { useAppDispatch, useAppSelector } from 'store';
import { useEffect } from 'react';
import { getProductList } from 'store/feature/product/productslice';

const ProductListPage = () => {
  const { currentPage } = usePagination();
  const dispatch = useAppDispatch();
  const productStore = useAppSelector((state) => state.product);
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
