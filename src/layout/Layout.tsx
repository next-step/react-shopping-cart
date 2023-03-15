import Header from '../components/frame/Header';
import styled from '@emotion/styled';
import { Outlet } from 'react-router-dom';

const S = {
  Layout: styled.div(),
};
const Layout = () => {
  return (
    <S.Layout>
      <Header />
      <Outlet />
    </S.Layout>
  );
};

export default Layout;
