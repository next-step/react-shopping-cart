import { PropsWithChildren, createContext, useCallback, useMemo, useRef, useState } from 'react';

import Toast from '@/components/common/Toast/Toast';

import useBoolean from '@/hooks/useBoolean';

type InitValue = {
  openToast: (message: string) => void;
};

const initValue: InitValue = {
  openToast: () => null,
};

export const ToastContext = createContext(initValue);

export default function ToastProvider({ children }: PropsWithChildren) {
  const [message, setMessage] = useState('');
  const { bool: showToast, setTrue: setShowToastTrue, setFalse: setShowToastFalse } = useBoolean(false);
  const toastTimer = useRef<NodeJS.Timeout>();

  const openToast = useCallback(
    (message: string) => {
      setShowToastTrue();
      setMessage(message);

      if (toastTimer.current) {
        clearTimeout(toastTimer.current);
      }

      const timer = setTimeout(() => {
        setShowToastFalse();
        setMessage('');
      }, 1_500);
      toastTimer.current = timer;
    },
    [setShowToastTrue, setShowToastFalse],
  );

  const contextValue = useMemo(() => ({ openToast }), [openToast]);

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      {showToast && <Toast message={message} />}
    </ToastContext.Provider>
  );
}
