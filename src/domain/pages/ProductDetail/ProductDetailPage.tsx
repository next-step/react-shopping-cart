import * as Styled from './ProductDetailPage.styles';
import { ProductDetailItem } from 'domain/components';
import { useAppSelector } from 'store';
import { Spinner, ErrorMessage, Dialog } from 'common/components';
import { useDialog } from 'common/hooks';

const ProductDetailPage = () => {
  const { isOpenDialog, dialogTitle } = useDialog();
  const productStore = useAppSelector((state) => state.productReducer);
  const products = productStore.productList.products;
  const status = productStore.status;

  if (status === 'Loading') {
    return <Spinner />;
  } else if (status === 'Fail') {
    return <ErrorMessage />;
  }

  return (
    <Styled.Layout>
      <Dialog isOpen={isOpenDialog} title={dialogTitle} />
      {<ProductDetailItem products={products} />}
    </Styled.Layout>
  );
};

export default ProductDetailPage;
