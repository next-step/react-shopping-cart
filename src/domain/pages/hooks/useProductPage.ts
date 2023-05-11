import { useDialog } from 'common/hooks';
import { getProductList } from 'domain/store/feature/product/productslice';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'store';

const useProductPage = () => {
  const { dialogTitle, isOpenDialog } = useDialog();
  const dispatch = useAppDispatch();
  const productStore = useAppSelector((state) => state.productReducer);
  const { id } = useParams();

  const products = productStore.productList.products;
  const status = productStore.status;
  const totalPage = productStore.productList.TOTAL_PAGE;
  const errorMessage = productStore.errorMessage;
  const selectedPage = productStore.selectedPage;

  const currentDetailItem = products.filter((product) => product.id === Number(id))[0];

  useEffect(() => {
    dispatch(getProductList(selectedPage));
  }, [selectedPage]);

  return { status, products, totalPage, isOpenDialog, dialogTitle, errorMessage, currentDetailItem };
};

export default useProductPage;
