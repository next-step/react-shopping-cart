import { PropsWithChildren } from 'react';

export default function CardList({ children }: PropsWithChildren) {
  return (
    <div className="card-list">
      {children}
    </div>
  );
}
