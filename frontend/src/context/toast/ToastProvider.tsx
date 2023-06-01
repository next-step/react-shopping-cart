import { PropsWithChildren, createContext, useCallback, useMemo, useRef, useState } from 'react';

import Toast from '@/components/common/Toast/Toast';

import useBoolean from '@/hooks/useBoolean';

type InitValue = {
  showToast: (message: string) => void;
};

const initValue: InitValue = {
  showToast: () => null,
};

export const ToastContext = createContext(initValue);

export default function ToastProvider({ children }: PropsWithChildren) {
  const [message, setMessage] = useState('');
  const { bool: isToastOpen, setTrue, setFalse } = useBoolean(false);
  const toastTimer = useRef<NodeJS.Timeout>();

  const showToast = useCallback(
    (message: string) => {
      setTrue();
      setMessage(message);

      if (toastTimer.current) {
        clearTimeout(toastTimer.current);
      }

      const timer = setTimeout(() => {
        setFalse();
        setMessage('');
      }, 1_500);
      toastTimer.current = timer;
    },
    [setTrue, setFalse],
  );

  const contextValue = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {isToastOpen && <Toast message={message} />}
    </ToastContext.Provider>
  );
}
