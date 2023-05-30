import { PropsWithChildren, createContext, useCallback, useMemo, useRef, useState } from 'react';

import Toast from '@/components/common/Toast/Toast';

type InitValue = {
  showToast: (message: string) => void;
};

const initValue: InitValue = {
  showToast: () => null,
};

export const ToastContext = createContext(initValue);

export default function ToastProvider({ children }: PropsWithChildren) {
  const [message, setMessage] = useState('');
  const [isToastOpen, setIsToastOpen] = useState(false);
  const toastTimer = useRef<NodeJS.Timeout>();

  const showToast = useCallback((message: string) => {
    setIsToastOpen(true);
    setMessage(message);

    if (toastTimer.current) {
      clearTimeout(toastTimer.current);
    }

    const timer = setTimeout(() => {
      setIsToastOpen(false);
      setMessage('');
    }, 3_000);
    toastTimer.current = timer;
  }, []);

  const contextValue = useMemo(() => {
    return { showToast };
  }, [showToast]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {isToastOpen && <Toast message={message} />}
    </ToastContext.Provider>
  );
}
