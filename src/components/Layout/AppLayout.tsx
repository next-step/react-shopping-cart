import type { ReactNode } from 'react';

interface AppLayoutProps {
  children: ReactNode;
}
function AppLayout({ children }: AppLayoutProps) {
  return <div className="overflow-scroll">{children}</div>;
}

export default AppLayout;
