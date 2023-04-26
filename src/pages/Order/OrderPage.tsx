import * as Styled from './OrderPage.styles';
import { OrderdItem, Payment } from 'common/components/Domain';
import { Dialog, ErrorMessage, PageHeader, Spinner } from 'common/components/UI';
import { useEffect } from 'react';
import { useOrder, useDialog, useCart, useRouter } from 'common/hooks';
import uuid from 'react-uuid';
import { useAppSelector, useAppDispatch } from 'store';
import { usePayment } from 'payment-junyoung';
import { handlePaymentApp } from 'store/feature/order/orderSlice';

const OrderPage = () => {
  const { getOrderItem } = useOrder();
  const { deleteServerCartItem } = useCart();
  const { isOpenDialog, dialogTitle } = useDialog();
  const { push } = useRouter();

  const orderStore = useAppSelector((state) => state.order);
  const orderedList = orderStore.orderedList;
  const orderListLength = orderedList.length;
  const recentlyOrderedItem = orderedList[orderListLength - 1];
  const totalAmount = recentlyOrderedItem.ordered.totalAmount;
  const totalPrice = recentlyOrderedItem.ordered.totalPrice;
  const ordredItems = recentlyOrderedItem.ordered.items;
  const status = orderStore.status;
  const isOpenPaymentUI = orderStore.isOpenPaymentApp;
  const dispatch = useAppDispatch();

  const { isPayment } = usePayment();

  useEffect(() => {
    getOrderItem();
  }, []);

  useEffect(() => {
    if (isPayment) {
      deleteServerCartItem();
      dispatch(handlePaymentApp(false));
      push('/orders');
    }
  }, [isPayment]);

  if (status === 'Loading') {
    return <Spinner />;
  } else if (status === 'Fail') {
    return <ErrorMessage />;
  }

  return (
    <Styled.Layout>
      {isOpenPaymentUI && <Styled.CustomPaymentApp onCloseButton={() => dispatch(handlePaymentApp(false))} />}
      <Dialog isOpen={isOpenDialog} title={dialogTitle} />
      <PageHeader>주문/결제</PageHeader>
      <Styled.SectionContainer>
        <Styled.ItemSection>
          <Styled.Title>{`주문 상품(${totalAmount}건)`}</Styled.Title>
          <Styled.DivideLine />
          {ordredItems.map((product) => (
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
