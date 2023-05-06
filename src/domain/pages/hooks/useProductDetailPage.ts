import { useDialog } from 'common/hooks';
import { useParams } from 'react-router-dom';
import { useAppSelector } from 'store';

const useProductDetailPage = () => {
  const { isOpenDialog, dialogTitle } = useDialog();

  const productStore = useAppSelector((state) => state.productReducer);
  const products = productStore.productList.products;
  const status = productStore.status;
  const errorMessage = productStore.errorMessage;

  const params = useParams();
  const { id } = params;
  const currentDetailItem = products.filter((product) => product.id === Number(id))[0];

  return { isOpenDialog, dialogTitle, currentDetailItem, status, errorMessage };
};

export default useProductDetailPage;
