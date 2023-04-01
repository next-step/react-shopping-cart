import FlexContainer from 'components/FlexContainer';
import Title from 'components/Title';
import { PropsWithChildren } from 'react';
import * as StyledCheckout from './Checkout.styled';

interface CheckoutProps extends PropsWithChildren {
  total: number;
}

const Checkout = ({ total, children }: CheckoutProps) => {
  return (
    <FlexContainer direction="column" flex="1">
      <StyledCheckout.FirstBorderBox>
        <Title fontSize="20px">결제예상금액</Title>
      </StyledCheckout.FirstBorderBox>
      <StyledCheckout.SecondBorderBox>
        <FlexContainer justifyContent="space-between">
          <Title highlight fontSize="20px">
            결제예상금액
          </Title>
          <Title highlight fontSize="20px">
            {total}원
          </Title>
        </FlexContainer>
        <StyledCheckout.ButtonContainer>
          {children}
        </StyledCheckout.ButtonContainer>
      </StyledCheckout.SecondBorderBox>
    </FlexContainer>
  );
};

export default Checkout;
