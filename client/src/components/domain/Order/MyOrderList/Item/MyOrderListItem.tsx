import * as Styled from './MyOrderListItem.styles';
import type { MyOrderListItemProps } from './MyOrderListItem.types';

const MyOrderListItem = ({ amount, name, price, image }: MyOrderListItemProps) => {
  return (
    <Styled.Container>
      <Styled.FlexContainer>
        <Styled.ItemContainer>
          <Styled.ItemImage src={`${image}`} alt={`${name}`} />
          <Styled.ItemBox>
            <Styled.ItemName>{name}</Styled.ItemName>
            <Styled.ItemInfo>{`${price}원 / 수량 : ${amount}개`}</Styled.ItemInfo>
          </Styled.ItemBox>
        </Styled.ItemContainer>
        <Styled.OrderButton>장바구니</Styled.OrderButton>
      </Styled.FlexContainer>
    </Styled.Container>
  );
};

export default MyOrderListItem;
