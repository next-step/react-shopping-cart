import type { ReactNode } from 'react';

interface ContentLayoutProps {
  children: ReactNode;
}
function ContentLayout({ children }: ContentLayoutProps) {
  return <div className="flex flex-col max-w-5xl mx-auto">{children}</div>;
}

export default ContentLayout;
