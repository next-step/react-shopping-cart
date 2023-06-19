import * as Styled from './OrderdItem.styles';
import type { OrderProductType } from 'domain/types';

type OrderItemProps = OrderProductType;

const OrderdItem = ({ amount, name, image, price }: OrderItemProps) => {
  return (
    <Styled.Container>
      <Styled.OrderContainer>
        <Styled.OrderItemImage src={`${image}`} alt={name} />
        <Styled.OrderItemBox>
          <Styled.OrderName>{name}</Styled.OrderName>
          <Styled.OrderNumber>{`수량:${amount}`}</Styled.OrderNumber>
          <Styled.OrderNumber>{`가격: ${amount * price}원`}</Styled.OrderNumber>
        </Styled.OrderItemBox>
      </Styled.OrderContainer>
    </Styled.Container>
  );
};
export default OrderdItem;
