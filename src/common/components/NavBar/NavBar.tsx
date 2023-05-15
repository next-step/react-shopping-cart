import { useNavigate } from 'react-router-dom';
import * as Styled from './NavBar.styles';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <Styled.Container>
      <Styled.TitleBox onClick={() => navigate('/products')}>
        <Styled.CartIcon />
        <Styled.Title>JunYoung SHOP</Styled.Title>
      </Styled.TitleBox>
      <Styled.ButtonBox>
        <Styled.NavButton onClick={() => navigate('/carts')}>장바구니</Styled.NavButton>
        <Styled.NavButton onClick={() => navigate('/orders')}>나의 주문목록</Styled.NavButton>
      </Styled.ButtonBox>
    </Styled.Container>
  );
};

export default NavBar;
