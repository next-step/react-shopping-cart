import { PropsWithChildren } from 'react';
import { createPortal } from 'react-dom';

const dialogRootEl = document.getElementById('dialog-root');

function Portal({ children }: PropsWithChildren) {
  return createPortal(children, dialogRootEl as Element);
}

export default Portal;
