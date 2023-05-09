import React, { memo, useEffect } from "react";
import { Product } from "../../../store/store";

import Button from "../Button/Button";
import { setIsModalOpen, setModalMessage } from "../../../store/modalSlice";
import { useAppDispatch } from "../../../hooks/storeHooks";
import { useNavigate } from "react-router-dom";

export type Props = {
  type: string;
  message: string;
  product: Product;
};

const Modal = ({ product, type, message }: Props) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleConfirmButton = () => {
    navigate("/cart");
  };
  const handleCancelButton = () => {
    dispatch(setIsModalOpen(false));
  };
  useEffect(() => {
    dispatch(setModalMessage(type));
  }, [type, dispatch]);

  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
        <div className="modal-button-container">
          <Button
            className="primary-button primary-button-small primary-button-white"
            onClick={handleCancelButton}
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
