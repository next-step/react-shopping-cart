import styled from "styled-components";
import { Order } from "../../types/order";

interface ComponentProps {
  children: JSX.Element | JSX.Element[];
  order: Order;
}

export default function OrderGroup({ children, order }: ComponentProps) {
  return (
    <List>
      <Header>
        <span>주문번호: {order.id}</span>
        <span>상세보기 &gt;</span>
      </Header>
      {children}
    </List>
  );
}

const List = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  width: 100%;
  padding: 30px 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 50px;
  font-size: 20px;
  background: #f6f6f6;

  border: 1px solid #aaaaaa;
`;
