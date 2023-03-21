import { Link } from 'react-router-dom';
import { ROUTE } from '../../router';
import styled from '@emotion/styled';
import mq from '../../utils/style/mediaQuery';
import { COLORS, FRAME_PADDING, MAX_WIDTH } from '../../constant/style';

const S = {
  Header: styled.div(
    mq({
      width: '100%',
      height: '80px',
      background: COLORS.PRIMARY,
      boxShadow: '0 4px 4px rgba(0, 0, 0, 0.3)',
    })
  ),
  Nav: styled.nav(
    mq({
      maxWidth: MAX_WIDTH.DESKTOP,
      height: '100%',
      margin: '0 auto',
      padding: [
        `0 ${FRAME_PADDING.MOBILE}px`,
        `0 ${FRAME_PADDING.TABLET}px`,
        `0 ${FRAME_PADDING.DESKTOP}px`,
      ],
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    })
  ),
  Logo: styled.h1(
    mq({
      fontSize: ['20px', '20px', '30px'],
    })
  ),
  Button: styled.button(
    mq({
      fontSize: ['15px', '15px', '18px'],
      color: COLORS.WHITE,
    })
  ),
};

const Header = () => {
  return (
    <S.Header>
      <S.Nav>
        <div className="flex-center">
          <Link to={ROUTE.HOME}>
            <S.Logo className="nav-title">CLEAN CODE SHOP</S.Logo>
          </Link>
        </div>
        <div className="flex gap-15">
          <Link to={ROUTE.CART}>
            <S.Button>장바구니</S.Button>
          </Link>
          <Link to={ROUTE.ORDER_LIST}>
            <S.Button>주문목록</S.Button>
          </Link>
        </div>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
