import Header from './parts/Header';
import styled from '@emotion/styled';
import { mediaQuery } from '../utils';
import { FRAME_PADDING, MAX_WIDTH } from '../constant';
import { Outlet } from 'react-router-dom';

const S = {
  Layout: styled.div(),
  LayoutWrapper: styled.div(
    mediaQuery({
      maxWidth: MAX_WIDTH.DESKTOP,
      margin: '0 auto',
      padding: [
        `0 ${FRAME_PADDING.MOBILE}px`,
        `0 ${FRAME_PADDING.TABLET}px`,
        `0 ${FRAME_PADDING.DESKTOP}px`,
      ],
    })
  ),
};
const Layout = () => {
  return (
    <S.Layout>
      <Header />
      <S.LayoutWrapper>
        <Outlet />
      </S.LayoutWrapper>
    </S.Layout>
  );
};

export default Layout;
