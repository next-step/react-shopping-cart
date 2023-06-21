import * as Styled from './CartPage.styled';
import uuid from 'react-uuid';
import { CartItem, Payment } from 'domain/components';
import { Dialog, ErrorMessage, PageHeader } from 'common/components';
import useCartPage from '../hooks/useCartPage';
import { useDialog } from 'common/hooks';
const CartPage = () => {
  const {
    checkbox,
    handleSelectAllCheckBox,
    handleRemoveButton,
    cartList,
    totalAmount,
    totalPrice,
    status,
    errorMessage,
  } = useCartPage();
  const { dialogTitle, isOpenDialog } = useDialog();

  if (status === 'Fail') {
    return <ErrorMessage>{errorMessage}</ErrorMessage>;
  }

  return (
    <Styled.Layout>
      <Dialog title={dialogTitle} isOpen={isOpenDialog} />
      <PageHeader>장바구니</PageHeader>
      <Styled.SectionContainer>
        <Styled.ItemSection>
          <Styled.CheckBoxContainer>
            <Styled.CheckBoxInputBox>
              <Styled.CheckBox
                type={'checkbox'}
                name="checkbox"
                onChange={handleSelectAllCheckBox}
                checked={checkbox}
              />
              <Styled.CheckBoxLabel htmlFor="checkbox">모두 선택</Styled.CheckBoxLabel>
            </Styled.CheckBoxInputBox>
            <Styled.CartRemoveButton onClick={handleRemoveButton} role="button" />
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
          <Payment title="결제예상금액" price={totalPrice} totalAmount={totalAmount} type="cart" />
        </Styled.PaymentSection>
      </Styled.SectionContainer>
    </Styled.Layout>
  );
};

export default CartPage;
