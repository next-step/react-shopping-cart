import React, { memo } from "react";
import { Product } from "../../../store/store";

import Button from "../Button/Button";
import { setIsModalOpen } from "../../../store/modalSlice";

export type Props = {
  type: string;
  message: string;
  product?: Product;
};

const Modal = ({ product, type, message }: Props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
        <div className="modal-button-container">
          <Button
            className="primary-button-small"
            onClick={() => alert("confirm!")}
          >
            OK
          </Button>
          <Button
            className="primary-button-small"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(Modal);
