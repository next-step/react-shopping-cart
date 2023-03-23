import * as Styled from './Item.styles';

const Item = () => {
  return (
    <Styled.Layout>
      <Styled.FlexBox display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
        <Styled.FlexBox display={'flex'}>
          <Styled.ItemImage src="assets/images/product.png" alt="Pet보틀-정사각" />
          <Styled.ItemBox display={'flex'} flexDirection="column">
            <Styled.ItemName>PET보틀-정사각(420ml)</Styled.ItemName>
            <Styled.ItemInfo>54,800원 / 수량 : 3개 </Styled.ItemInfo>
          </Styled.ItemBox>
        </Styled.FlexBox>
        <Styled.OrderButton>장바구니</Styled.OrderButton>
      </Styled.FlexBox>
    </Styled.Layout>
  );
};

export default Item;
