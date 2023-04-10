import * as Styled from './ProductDetailPage.styles';
import { ProductDetailItem } from 'common/components/Domain';
import { useAppSelector } from 'store';
import { Spinner, ErrorMessage, Dialog } from 'common/components';
import { useDialog } from 'common/hooks';

const ProductDetailPage = () => {
  const productStore = useAppSelector((state) => state.product);
  const products = productStore.productList.products;
  const status = productStore.status;

  const { isOpenDialog, dialogTitle } = useDialog();

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
