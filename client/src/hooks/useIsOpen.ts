import { useState } from 'react';

function useIsOpen(defaultIsOpen?: boolean) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen ?? false);

  const open = () => {
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const toggle = () => {
    setIsOpen((prevState) => !prevState);
  };

  return { open, close, toggle, isOpen };
}

export default useIsOpen;
