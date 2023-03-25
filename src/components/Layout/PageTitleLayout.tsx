import type { PropsWithChildren } from 'react';
import Heading from '../Common/Heading';

interface PageTitleLayoutProps {
  title: string;
}
function PageTitleLayout({ title, children }: PropsWithChildren<PageTitleLayoutProps>) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-center mt-10 my-5 pb-5 border-b-2 border-black">
        <Heading variant="h2">{title}</Heading>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default PageTitleLayout;
