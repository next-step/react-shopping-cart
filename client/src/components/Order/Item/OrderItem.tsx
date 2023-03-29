import * as Styled from './OrderItem.styles';
import type { OrderProductType } from 'types';

type OrderItemProps = OrderProductType;

const OrderItem = ({ amount, name, image, id, price }: OrderItemProps) => {
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
export default OrderItem;
