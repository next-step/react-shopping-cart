import { useOrder } from 'hooks';
import * as Styled from './Payment.styled';
import type { PaymentProps } from './Payment.types';

const Payment = ({ ...props }: PaymentProps) => {
  const { handleCartOrderButton, handleOrderButton } = useOrder();
  return (
    <Styled.Container>
      <Styled.TitleBox>
        <Styled.Title>{props.title}</Styled.Title>
      </Styled.TitleBox>
      <Styled.ThinLine />
      <div>
        <Styled.ItemInfoBox>
          <Styled.Text>{props.text}</Styled.Text>
          <Styled.Price>{props.price}원</Styled.Price>
        </Styled.ItemInfoBox>
        <Styled.ButtonBox>
          {props.type === 'cart' && (
            <Styled.OrderButton
              onClick={handleCartOrderButton}
              active={props.totalAmount && props.totalAmount > 0 ? true : false}
            >
              {`주문하기 ${props.totalAmount}개`}
            </Styled.OrderButton>
          )}
          {props.type === 'order' && <Styled.OrderButton onClick={handleOrderButton}>{`결제하기`}</Styled.OrderButton>}
        </Styled.ButtonBox>
      </div>
    </Styled.Container>
  );
};
export default Payment;
