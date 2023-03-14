import * as Styled from './ExpectedPayment.styled';
import type { ExpectedPaymentProps } from './ExpectedPayment.types';

const ExpectedPayment = ({ ...props }: ExpectedPaymentProps) => {
  return (
    <div>
      <Styled.Top>
        <Styled.Title>{props.title}</Styled.Title>
      </Styled.Top>
      <Styled.ThinLine />
      <div>
        <Styled.Bottom display={'flex'} justifyContent="space-between">
          <Styled.Text>{props.text}</Styled.Text>
          <Styled.Price>{props.price}</Styled.Price>
        </Styled.Bottom>
        <Styled.ButtonBox display={'flex'} justifyContent="center" alignItems="center">
          <Styled.OrderButton>{props.buttonText}</Styled.OrderButton>
        </Styled.ButtonBox>
      </div>
    </div>
  );
};
export default ExpectedPayment;
