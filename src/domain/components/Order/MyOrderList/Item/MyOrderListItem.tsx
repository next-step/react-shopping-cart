import * as Styled from './MyOrderListItem.styles';
import type { MyOrderListItemProps } from './MyOrderListItem.types';
import useMyOrderList from 'domain/components/hooks/useMyOrderList';

const MyOrderListItem = ({ id, amount, name, price, image }: MyOrderListItemProps) => {
  const { addToCart } = useMyOrderList(id);

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
        <Styled.CartButton onClick={() => addToCart({ id, amount, name, price, image, isOrder: false })} />
      </Styled.FlexContainer>
    </Styled.Container>
  );
};

export default MyOrderListItem;
