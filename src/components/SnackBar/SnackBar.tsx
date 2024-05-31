import classNames from 'classnames';
import { useEffect, useState } from 'react';
import { snackbarContainer, snackbarShow } from './SnackBar.css';

interface Props {
  open: boolean;
  onClose: () => void;
  message: string;
  duration?: number;
}

export const SnackBar = ({
  open,
  onClose,
  message,
  duration = 3000,
}: Props) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (open) {
      setShow(true);

      const timer = setTimeout(() => {
        setShow(false);
        onClose();
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [open]);

  if (!open) return <></>;

  return (
    <div className={classNames(snackbarContainer, { [snackbarShow]: show })}>
      {message}
    </div>
  );
};

export default SnackBar;
