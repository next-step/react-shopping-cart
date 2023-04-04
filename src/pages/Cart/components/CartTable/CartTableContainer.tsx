import { Heading } from '@/components/Common';
import { PropsWithChildren, ReactNode } from 'react';

function CartTableContainer({ children, desc }: PropsWithChildren<{ desc: ReactNode }>) {
  return (
    <div>
      <div className="border-b-2 border-b-slate-400 pb-3 ml-2">
        <Heading variant="h3">{desc}</Heading>
      </div>
      {children}
    </div>
  );
}

export default CartTableContainer;
