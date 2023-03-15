import { Outlet } from 'react-router-dom';

import { Header } from '@/components/Header';

import * as Styled from './Layout.styled';

export default function Layout() {
  return (
    <Styled.Layout>
      <Header />
      <Outlet />
    </Styled.Layout>
  );
}
