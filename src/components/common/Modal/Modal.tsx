import React, { memo } from "react";
import { Product } from "../../../store/store";
import Button from "../Button/Button";
import useModal from "../../../hooks/useModal";

export type Props = {
  type: string;
  message: string;
  product?: Product;
};

const Modal = ({ product, type, message }: Props) => {
  const { closeModal, handleConfirmButton } = useModal();

  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
        <div className="modal-button-container">
          <Button
            className="primary-button primary-button-small primary-button-white"
            onClick={closeModal}
          >
            Cancel
          </Button>
          <Button
            className="primary-button primary-button-small"
            onClick={handleConfirmButton}
          >
            OK
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(Modal);
