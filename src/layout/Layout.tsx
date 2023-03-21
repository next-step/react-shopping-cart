import Header from './header/Header';
import styled from '@emotion/styled';
import { PropsWithChildren } from 'react';

const S = {
  Layout: styled.div(),
};
const Layout = ({ children }: PropsWithChildren) => {
  return (
    <S.Layout>
      <Header />
      {children}
    </S.Layout>
  );
};

export default Layout;
