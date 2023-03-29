import * as Styled from './OrderListItem.styles';

const OrderListItem = () => {
  return (
    <Styled.Container>
      <Styled.FlexContainer>
        <Styled.ItemContainer>
          <Styled.ItemImage src="assets/images/product.png" alt="Pet보틀-정사각" />
          <Styled.ItemBox>
            <Styled.ItemName>PET보틀-정사각(420ml)</Styled.ItemName>
            <Styled.ItemInfo>54,800원 / 수량 : 3개 </Styled.ItemInfo>
          </Styled.ItemBox>
        </Styled.ItemContainer>
        <Styled.OrderButton>장바구니</Styled.OrderButton>
      </Styled.FlexContainer>
    </Styled.Container>
  );
};

export default OrderListItem;
