import { useCallback, useState } from 'react';

function useIsOpen(defaultIsOpen?: boolean) {
  const [isOpen, setIsOpen] = useState(defaultIsOpen ?? false);

  const open = useCallback(() => {
    setIsOpen(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  const toggle = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return { open, close, toggle, isOpen };
}

export default useIsOpen;
