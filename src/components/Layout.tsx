import styled from "styled-components";

type ComponentProps = {
  children: JSX.Element | JSX.Element[];
};

function Layout({ children }: ComponentProps) {
  return (
    <>
      <Nav>
        <TitleBox>
          <Title>CLEAN CODE SHOP</Title>
        </TitleBox>
        <MenuBox>
          <Button>장바구니</Button>
          <Button>주문목록</Button>
        </MenuBox>
      </Nav>
      <div>{children}</div>
    </>
  );
}

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  background: #2ac1bc;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-around;
`;

const TitleBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 40px;
  font-weight: 900;
  text-align: center;
  vertical-align: middle;
  color: #ffffff;
`;

const MenuBox = styled.div`
  display: flex;
  gap: 15px;
`;

const Button = styled.button`
  font-weight: 500;
  font-size: 24px;
  color: #ffffff;
`;

export default Layout;
