import uuid from 'react-uuid';
import * as Styled from './OrderPage.styles';
import { OrderdItem, Payment } from 'domain/components';
import { Dialog, ErrorMessage, PageHeader, Spinner } from 'common/components';
import useOrderPage from '../hooks/useOrderPage';
import { useDialog } from 'common/hooks';

const OrderPage = () => {
  const { status, isOpenPaymentUI, handlePaymentAppCloseButton, cartList, totalAmount, totalPrice, errorMessage } =
    useOrderPage();

  const { dialogTitle, isOpenDialog } = useDialog();

  if (status === 'Loading') {
    return <Spinner />;
  } else if (status === 'Fail') {
    return <ErrorMessage>{errorMessage}</ErrorMessage>;
  }

  return (
    <Styled.Layout>
      {isOpenPaymentUI && <Styled.CustomPaymentApp onCloseButton={handlePaymentAppCloseButton} />}
      <Dialog title={dialogTitle} isOpen={isOpenDialog} />
      <PageHeader>주문/결제</PageHeader>
      <Styled.SectionContainer>
        <Styled.ItemSection>
          <Styled.Title data-testid="order-totalAmount">{`주문 상품(${totalAmount}건)`}</Styled.Title>
          <Styled.DivideLine />
          {cartList.map((product) => (
            <OrderdItem
              id={product.id}
              key={uuid()}
              image={product.image}
              name={product.name}
              amount={product.amount}
              price={product.price}
            />
          ))}
        </Styled.ItemSection>
        <Styled.PaymentSection>
          <Payment title="결제금액" price={totalPrice} totalAmount={totalAmount} type="order" />
        </Styled.PaymentSection>
      </Styled.SectionContainer>
    </Styled.Layout>
  );
};

export default OrderPage;
