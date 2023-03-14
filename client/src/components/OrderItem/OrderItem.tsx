import * as Styled from './OrderItem.styles';

const OrderItem = () => {
  return (
    <Styled.Container display={'flex'} justifyContent={'space-between'}>
      <Styled.FlexBox display={'flex'}>
        <Styled.OrderItemImage src="assets/images/product.png" alt="Pet보틀-정사각" />
        <Styled.FlexBox display={'flex'} flexDirection={'column'}>
          <Styled.OrderName>PET보틀-정사각(420ml)</Styled.OrderName>
          <Styled.OrderNumber>수량:3</Styled.OrderNumber>
        </Styled.FlexBox>
      </Styled.FlexBox>
    </Styled.Container>
  );
};
export default OrderItem;
