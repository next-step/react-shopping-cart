import type { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}
function AppLayout({ children }: AppLayoutProps) {
  return <div>{children}</div>;
}

export default AppLayout;
