import * as Styled from './OrderdItem.styles';
import type { OrderProductType } from 'domain/types';

type OrderItemProps = OrderProductType;

const OrderdItem = ({ amount, name, image, price }: OrderItemProps) => {
  return (
    <Styled.Container>
      <Styled.OrderContainer>
        <Styled.OrderItemImage data-testid="orderItem-image" src={`${image}`} alt={name} />
        <Styled.OrderItemBox>
          <Styled.OrderName data-testid="orderItem-name">{name}</Styled.OrderName>
          <Styled.OrderNumber data-testid="orderItem-amount">{`수량:${amount}`}</Styled.OrderNumber>
          <Styled.OrderNumber data-testid="orderItem-price">{`가격: ${amount * price}원`}</Styled.OrderNumber>
        </Styled.OrderItemBox>
      </Styled.OrderContainer>
    </Styled.Container>
  );
};
export default OrderdItem;
