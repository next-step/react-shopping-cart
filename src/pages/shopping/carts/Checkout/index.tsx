import FlexContainer, { FlexContainerProps } from 'components/FlexContainer';
import Title from 'components/Title';
import { PropsWithChildren } from 'react';
import * as StyledCheckout from './Checkout.styled';

interface CheckoutProps extends PropsWithChildren {
  total: number;
  flexContainerStyles?: FlexContainerProps;
  isOrderPage?: boolean;
}

const Checkout = ({
  total,
  children,
  flexContainerStyles,
  isOrderPage,
}: CheckoutProps) => {
  return (
    <FlexContainer direction="column" flex="1" {...flexContainerStyles}>
      <StyledCheckout.FirstBorderBox>
        <Title fontSize="20px">
          {isOrderPage ? ' 결제금액 정보' : '결제예상금액'}
        </Title>
      </StyledCheckout.FirstBorderBox>
      <StyledCheckout.SecondBorderBox>
        <FlexContainer justifyContent="space-between" gap={'10px'}>
          <Title highlight fontSize="20px">
            {isOrderPage ? ' 총 결제금액' : '결제예상금액'}
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
