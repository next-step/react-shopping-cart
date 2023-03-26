import * as Styled from './Cart.styled';
import uuid from 'react-uuid';
import { CartItem } from 'components/Cart/Item';
import { Payment } from 'components/Payment';
import { PageHeader } from 'components/common/PageHeader';
import { useCart } from 'hooks';
import { useEffect } from 'react';
import { useAppDispatch } from 'store';
import { getCart } from 'store/feature/cart/cartSlice';

const Cart = () => {
  const { cartList } = useCart();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getCart('/carts'));
  }, []);

  // const { totalPrice, totalAmount } = useOrder();

  return (
    <Styled.Layout>
      <PageHeader>장바구니</PageHeader>
      <Styled.FlexContainer>
        <Styled.LeftSection>
          <Styled.FlexContainer justifyContent={'space-between'} alignItems={'center'}>
            <Styled.CheckBoxContainer alignItems={'center'}>
              <Styled.CheckBox type={'checkbox'} name="checkbox" />
              <Styled.CheckBoxLabel htmlFor="checkbox">모두 선택</Styled.CheckBoxLabel>
            </Styled.CheckBoxContainer>
            <Styled.CheckBoxButton>상품 삭제</Styled.CheckBoxButton>
          </Styled.FlexContainer>
          <Styled.CartTitle>든든 배송상품</Styled.CartTitle>
          <Styled.Divider />
          {cartList?.map((product) => (
            <CartItem
              key={uuid()}
              price={product.price}
              image={product.image}
              name={product.name}
              id={product.id}
              isOrder={product.isOrder}
              amount={product.amount}
            />
          ))}
        </Styled.LeftSection>
        <Styled.RightSection>
          <Payment title="결제예상금액" text="결제 예상 금액" price={0} buttonText={`주문하기 1개 `} />
        </Styled.RightSection>
      </Styled.FlexContainer>
    </Styled.Layout>
  );
};

export default Cart;
