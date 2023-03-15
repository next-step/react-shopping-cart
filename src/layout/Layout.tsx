import Header from '../components/frame/Header';
import styled from '@emotion/styled';
import { ReactNode } from 'react';

const S = {
  Layout: styled.div(),
};
const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <S.Layout>
      <Header />
      {children}
    </S.Layout>
  );
};

export default Layout;
