import * as Styled from './Item.styles';
import type { OrderProductType } from 'types';

type ItemProps = OrderProductType;

const Item = ({ amount, name, image, id, price }: ItemProps) => {
  return (
    <Styled.Container display={'flex'} justifyContent={'space-between'}>
      <Styled.FlexBox display={'flex'}>
        <Styled.OrderItemImage src={`${image}`} alt={name} />
        <Styled.FlexBox display={'flex'} flexDirection={'column'}>
          <Styled.OrderName>{name}</Styled.OrderName>
          <Styled.OrderNumber>{`수량:${amount}`}</Styled.OrderNumber>
          <Styled.OrderNumber>{`가격: ${amount * price}원`}</Styled.OrderNumber>
        </Styled.FlexBox>
      </Styled.FlexBox>
    </Styled.Container>
  );
};
export default Item;
