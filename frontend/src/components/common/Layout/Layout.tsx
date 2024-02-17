import { Outlet } from 'react-router-dom';

import { Header } from '@/components/common/Layout/Header';

export default function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
}
