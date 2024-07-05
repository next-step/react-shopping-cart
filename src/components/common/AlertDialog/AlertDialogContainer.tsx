import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { css } from '@/styled-system/css';
import useAlertDialogStore from '@/store/alertDialogStore';

const ALERT_DIALOG_ID = 'alert-dialog';

export default function AlertDialogContainer() {
  const isOpen = useAlertDialogStore.use.isOpen();
  const title = useAlertDialogStore.use.title();
  const message = useAlertDialogStore.use.message();
  const btnText = useAlertDialogStore.use.btnText();
  const onConfirm = useAlertDialogStore.use.onConfirm();
  const close = useAlertDialogStore.use.close();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  const handleConfirm = () => {
    onConfirm();
    close();
  };

  return createPortal(
    <>
      <div className={alertDialogContainer} onClick={close}></div>
      <div className={alertDialogContent}>
        <h2 className={alertDialogTitle}>{title}</h2>
        <p className={alertDialogMessage}>{message}</p>
        <div className={alertDialogButtonContainer}>
          <button className={alertDialogConfirmButton} onClick={handleConfirm}>
            {btnText}
          </button>
          <button className={alertDialogCancelButton} onClick={close}>
            닫기
          </button>
        </div>
      </div>
    </>,
    document.getElementById(ALERT_DIALOG_ID) as HTMLDivElement
  );
}

const alertDialogContainer = css({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 999,
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
});

const alertDialogContent = css({
  position: 'fixed',
  display: 'grid',
  gap: '16px',
  top: '50%',
  left: '50%',
  padding: '18px',
  minWidth: '300px',
  maxWidth: '400px',
  borderRadius: '12px',
  overflow: 'hidden',
  backgroundColor: 'white',
  transform: 'translate(-50%, -50%)',
  zIndex: 999,
});

const alertDialogConfirmButton = css({
  flex: 1,
  height: '32px',
  textAlign: 'center',
  color: 'white',
  backgroundColor: 'blue.500',
  borderRadius: '4px',
  cursor: 'pointer',
});

const alertDialogTitle = css({
  textAlign: 'start',
  fontSize: '22px',
  fontWeight: 600,
});

const alertDialogButtonContainer = css({
  display: 'flex',
  gap: '8px',
});

const alertDialogCancelButton = css({
  flex: 1,
  height: '32px',
  textAlign: 'center',
  color: 'white',
  border: '1px solid lightgrey',
  backgroundColor: 'gray.400',
  borderRadius: '4px',
  cursor: 'pointer',
});

const alertDialogMessage = css({
  padding: '4px 0',
  fontSize: '18px',
});
