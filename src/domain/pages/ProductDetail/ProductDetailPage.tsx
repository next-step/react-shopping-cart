import * as Styled from './ProductDetailPage.styles';
import { ProductDetailItem } from 'domain/components';
import { Spinner, ErrorMessage, Dialog } from 'common/components';
import useProductPage from '../hooks/useProductPage';
import { useDialog } from 'common/hooks';

const ProductDetailPage = () => {
  const { status, currentDetailItem, errorMessage } = useProductPage();
  const { isOpenDialog, dialogTitle } = useDialog();

  if (status === 'Loading') {
    return <Spinner />;
  } else if (status === 'Fail') {
    return <ErrorMessage>{errorMessage}</ErrorMessage>;
  }

  return (
    <Styled.Layout>
      <Dialog title={dialogTitle} isOpen={isOpenDialog} />
      <ProductDetailItem
        id={currentDetailItem.id}
        image={currentDetailItem.image}
        name={currentDetailItem.name}
        price={currentDetailItem.price}
      />
    </Styled.Layout>
  );
};

export default ProductDetailPage;
