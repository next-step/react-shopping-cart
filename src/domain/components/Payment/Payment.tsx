import usePaymentApp from 'domain/hooks/usePaymentApp';
import * as Styled from './Payment.styled';
import type { PaymentProps } from './Payment.types';
import { useOrder } from 'domain/hooks';

const Payment = ({ ...props }: PaymentProps) => {
  const { orderCart } = useOrder();
  const { openPaymentApp } = usePaymentApp();
  return (
    <Styled.Container>
      <Styled.TitleBox>
        <Styled.Title>{props.title}</Styled.Title>
      </Styled.TitleBox>
      <Styled.ThinLine />
      <div>
        <Styled.ItemInfoBox>
          <div />
          <Styled.Price data-testid="payment-price">{props.price}원</Styled.Price>
        </Styled.ItemInfoBox>
        <Styled.ButtonBox>
          {props.type === 'cart' && (
            <Styled.OrderButton
              onClick={orderCart}
              disabled={props.totalAmount && props.totalAmount > 0 ? false : true}
            >
              {`주문하기 ${props.totalAmount}개`}
            </Styled.OrderButton>
          )}
          {props.type === 'order' && <Styled.OrderButton onClick={openPaymentApp}>{`결제하기`}</Styled.OrderButton>}
        </Styled.ButtonBox>
      </div>
    </Styled.Container>
  );
};
export default Payment;
