import { PropsWithChildren } from 'react';

type Props = {
  highlight?: boolean;
  className?: string;
};

const Text = ({
  highlight = false,
  className = '',
  children,
}: PropsWithChildren<Props>) => {
  return (
    <span className={`${highlight ? 'highlight-text' : ''} ${className}`}>
      {children}
    </span>
  );
};

export default Text;
