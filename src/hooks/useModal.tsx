import { useState } from 'react';

const useModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleModalToggle = () => setIsOpen((prev) => !prev);

  return { isOpen, handleModalToggle };
};

export default useModal;
