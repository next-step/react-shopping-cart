import * as Styled from './Cart.styled';
import { CartItem } from 'components/CartItem';
import { Payment } from 'components/Payment';
import useCart from 'hooks/useCart';
const Cart = () => {
  const { cartList, totalPrice } = useCart();

  return (
    <Styled.Layout>
      <Styled.CartListHeader>장바구니</Styled.CartListHeader>
      <Styled.FlexContainer>
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
          {cartList &&
            cartList.map((product) => (
              <CartItem key={product.id} price={product.price} image={product.image} name={product.name} />
            ))}
        </Styled.LeftSection>
        <Styled.RightSection>
          <Payment title="결제예상금액" text="결제 예상 금액" price={totalPrice()} buttonText="주문하기" />
        </Styled.RightSection>
      </Styled.FlexContainer>
    </Styled.Layout>
  );
};

export default Cart;
