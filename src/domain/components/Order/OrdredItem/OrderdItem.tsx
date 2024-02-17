import * as Styled from './OrderdItem.styles';
import type { OrderProductType } from 'domain/types';

type OrderItemProps = OrderProductType;

const OrderdItem = ({ amount, name, image, price }: OrderItemProps) => {
  return (
    <Styled.Container>
      <Styled.OrderContainer>
        <Styled.OrderItemImage src={`${image}`} alt={name} />
        <Styled.OrderItemBox>
          <Styled.OrderName data-testid="order-name">{name}</Styled.OrderName>
          <div>
            <Styled.OrderInfo>{`수량 : `}</Styled.OrderInfo>
            <Styled.OrderInfo data-testid="order-amount">{amount}</Styled.OrderInfo>
          </div>
          <div>
            <Styled.OrderInfo>{`가격 : `}</Styled.OrderInfo>
            <Styled.OrderInfo data-testid="order-price">{`${amount * price}원`}</Styled.OrderInfo>
          </div>
        </Styled.OrderItemBox>
      </Styled.OrderContainer>
    </Styled.Container>
  );
};
export default OrderdItem;
