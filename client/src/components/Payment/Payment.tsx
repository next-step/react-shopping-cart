import * as Styled from './Payment.styled';
import type { PaymentProps } from './Payment.types';

const Payment = ({ ...props }: PaymentProps) => {
  return (
    <div>
      <Styled.Top>
        <Styled.Title>{props.title}</Styled.Title>
      </Styled.Top>
      <Styled.ThinLine />
      <div>
        <Styled.Bottom display={'flex'} justifyContent="space-between">
          <Styled.Text>{props.text}</Styled.Text>
          <Styled.Price>{props.price}원</Styled.Price>
        </Styled.Bottom>
        {props.buttonText && (
          <Styled.ButtonBox display={'flex'} justifyContent="center" alignItems="center">
            <Styled.OrderButton>{props.buttonText}</Styled.OrderButton>
          </Styled.ButtonBox>
        )}
      </div>
    </div>
  );
};
export default Payment;
