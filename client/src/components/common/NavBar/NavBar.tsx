import * as Styled from './NavBar.styles';
import useRouter from 'hooks/useRouter';

const NavBar = () => {
  const { push } = useRouter();
  return (
    <Styled.Container>
      <Styled.TitleBox onClick={() => push('/products')}>
        <Styled.CartIcon />
        <Styled.Title>JunYoung SHOP</Styled.Title>
      </Styled.TitleBox>
      <Styled.ButtonBox>
        <Styled.NavButton onClick={() => push('/carts')}>장바구니</Styled.NavButton>
        <Styled.NavButton onClick={() => push('/orders')}>주문목록</Styled.NavButton>
      </Styled.ButtonBox>
    </Styled.Container>
  );
};

export default NavBar;
