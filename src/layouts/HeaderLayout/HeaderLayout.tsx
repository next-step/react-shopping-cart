import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header } from '@/components';

export function HeaderLayout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}
