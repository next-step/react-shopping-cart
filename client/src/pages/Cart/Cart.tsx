import * as Styled from './Cart.styled';
import { CartItem } from 'components/CartItem';
import { ExpectedPayment } from 'components/ExpectedPayment';
const Cart = () => {
  return (
    <Styled.Root>
      <Styled.CartListHeader>장바구니</Styled.CartListHeader>
      <Styled.FlexContainer>
        <CartListLeftSection />
        <CartListRightSection />
      </Styled.FlexContainer>
    </Styled.Root>
  );
};

const CartListLeftSection = () => {
  return (
    <Styled.LeftSection>
      <Styled.FlexContainer justifyContent={'space-between'} alignItems={'center'}>
        <Styled.CheckBoxContainer alignItems={'center'}>
          <Styled.CheckBox type={'checkbox'} name="checkbox" />
          <Styled.CheckBoxLabel htmlFor="checkbox">선택 해제</Styled.CheckBoxLabel>
        </Styled.CheckBoxContainer>
        <Styled.CheckBoxButton>상품 삭제</Styled.CheckBoxButton>
      </Styled.FlexContainer>
      <Styled.CartTitle>든든 배송상품</Styled.CartTitle>
      <Styled.Divider />
      <CartItem />
    </Styled.LeftSection>
  );
};
const CartListRightSection = () => {
  return (
    <Styled.RightSection>
      <ExpectedPayment />
    </Styled.RightSection>
  );
};

export default Cart;
