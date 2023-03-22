import { PropsWithChildren } from 'react';

type Props = {
  highlight?: boolean;
};

const Text = ({ highlight = false, children }: PropsWithChildren<Props>) => {
  return <span className={highlight ? 'highlight-text' : ''}>{children}</span>;
};

export default Text;
