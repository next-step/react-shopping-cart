import * as Styled from './OrderItem.styles';
import type { OrderProductType } from 'types';

type OrderItemProps = OrderProductType;

const OrderItem = ({ amount, name, image, id, price }: OrderItemProps) => {
  return (
    <Styled.Container>
      <Styled.OrderContainer>
        <Styled.OrderItemImage src={`${image}`} alt={name} />
        <Styled.OrderInputBox>
          <Styled.OrderName>{name}</Styled.OrderName>
          <Styled.OrderNumber>{`수량:${amount}`}</Styled.OrderNumber>
          <Styled.OrderNumber>{`가격: ${amount * price}원`}</Styled.OrderNumber>
        </Styled.OrderInputBox>
      </Styled.OrderContainer>
    </Styled.Container>
  );
};
export default OrderItem;
