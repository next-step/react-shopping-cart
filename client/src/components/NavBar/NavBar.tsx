import * as Styled from './NavBar.styles';

const NavBar = () => {
  return (
    <Styled.Layout>
      <Styled.TitleBox>
        <Styled.CartIcon />
        <Styled.Title>CLEAN CODE SHOP</Styled.Title>
      </Styled.TitleBox>
      <Styled.ButtonBox display="flex">
        <Styled.NavButton>장바구니</Styled.NavButton>
        <Styled.NavButton>주문목록</Styled.NavButton>
      </Styled.ButtonBox>
    </Styled.Layout>
  );
};

export default NavBar;
