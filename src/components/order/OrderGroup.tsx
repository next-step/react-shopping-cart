import styled from "styled-components";
import OrderProduct from "./OrderProduct";

export default function OrderGroup() {
  return (
    <List>
      <Header>
        <span>주문번호: 1</span>
        <span>상세보기 &gt;</span>
      </Header>
      <OrderProduct />
      <OrderProduct />
      <OrderProduct />
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
