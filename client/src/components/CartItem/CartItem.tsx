import * as Styled from './CartItem.styles';

const CartItem = () => {
  return (
    <Styled.Layout display={'flex'} justifyContent={'space-between'}>
      <CartItemLeft />
      <CartItemRight />
    </Styled.Layout>
  );
};

const CartItemLeft = () => {
  return (
    <Styled.LeftFlexBox display={'flex'}>
      <Styled.CheckBox type={'checkbox'} name="checkbox" />
      <Styled.CartItemImage src="assets/images/product.png" alt="Pet보틀-정사각" />
      <Styled.CartItemName>PET보틀-정사각(420ml)</Styled.CartItemName>
    </Styled.LeftFlexBox>
  );
};
const CartItemRight = () => {
  return (
    <Styled.RightFlexBox display={'flex'} flexDirection="column" justifyContent={'center'} alignItems={'center'}>
      <Styled.CartRemoveButton />
      <Styled.CartInputNumberContainer display={'flex'} justifyContent={'center'} alignItems={'center'}>
        <Styled.CartInputNumber type="number" />
        <div>
          <Styled.CartInputNumberButton>▲</Styled.CartInputNumberButton>
          <Styled.CartInputNumberButton>▼</Styled.CartInputNumberButton>
        </div>
      </Styled.CartInputNumberContainer>
      <Styled.CartPriceText>123,456원</Styled.CartPriceText>
    </Styled.RightFlexBox>
  );
};
export default CartItem;
