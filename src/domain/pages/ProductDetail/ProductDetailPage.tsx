import * as Styled from './ProductDetailPage.styles';
import { ProductDetailItem } from 'domain/components';
import { Spinner, ErrorMessage, Dialog } from 'common/components';
import useProductPage from '../hooks/useProductPage';

const ProductDetailPage = () => {
  const { status, isOpenDialog, dialogTitle, currentDetailItem, errorMessage } = useProductPage();

  if (status === 'Loading') {
    return <Spinner />;
  } else if (status === 'Fail') {
    return <ErrorMessage>{errorMessage}</ErrorMessage>;
  }

  return (
    <Styled.Layout>
      <Dialog isOpen={isOpenDialog} title={dialogTitle} />
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
