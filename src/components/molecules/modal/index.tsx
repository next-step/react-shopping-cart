import { Button } from '../../atomes';
import { memo, useCallback } from 'react';

export interface IModal {
  open: boolean;
  text: string;
  onClick: (state: boolean) => void;
}

function Modal({ open, text, onClick }: IModal) {
  const handleClickCancel = useCallback(() => {
    onClick(false);
  }, []);

  const handleClickAccept = useCallback(() => {
    onClick(true);
  }, []);

  if (!open) {
    return null;
  }

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="modal__content">
          {text}
        </div>
        <div className="modal__bottom">
          <Button text="취소" small color="gray" onClick={handleClickCancel}/>
          <Button text="확인" small onClick={handleClickAccept}/>
        </div>
      </div>
    </div>
  );
}

export default memo(Modal);
