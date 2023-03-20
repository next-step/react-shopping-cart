import { PropsWithChildren } from 'react';

export default function CardDetail({ children }: PropsWithChildren) {
  return (
    <div className="card-detail">
      {children}
    </div>
  );
}
