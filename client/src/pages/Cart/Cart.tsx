import * as Styled from './Cart.styled';
import uuid from 'react-uuid';
import { CartItem } from 'components/domain/Cart/Item';
import { Payment } from 'components/domain/Payment';
import { PageHeader } from 'components/common/PageHeader';
import { useCartPage } from 'hooks';
const CartPage = () => {
  const { check, handleCheckBox, handleDeleteButton, cartList, totalAmount, totalPrice } = useCartPage();

  return (
    <Styled.Layout>
      <PageHeader>장바구니</PageHeader>
      <Styled.SectionContainer>
        <Styled.ItemSection>
          <Styled.CheckBoxContainer>
            <Styled.CheckBoxInputBox>
              <Styled.CheckBox type={'checkbox'} name="checkbox" onChange={handleCheckBox} checked={check} />
              <Styled.CheckBoxLabel htmlFor="checkbox">모두 선택</Styled.CheckBoxLabel>
            </Styled.CheckBoxInputBox>
            <Styled.CheckBoxButton onClick={handleDeleteButton}>삭제</Styled.CheckBoxButton>
          </Styled.CheckBoxContainer>
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
        </Styled.ItemSection>
        <Styled.PaymentSection>
          <Payment
            title="결제예상금액"
            text="결제 예상 금액"
            price={totalPrice}
            totalAmount={totalAmount}
            type="cart"
          />
        </Styled.PaymentSection>
      </Styled.SectionContainer>
    </Styled.Layout>
  );
};

export default CartPage;
