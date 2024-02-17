import React from "react";
import Checkbox from "../../../common/Input/Checkbox/Checkbox";
import Modal from "../../../common/Modal/Modal";
import Button from "../../../common/Button/Button";
import useCart from "../../../../hooks/useCart";
import useModal from "../../../../hooks/useModal";

const ProductsController = () => {
  const { deleteAllItems, selectAllItems } = useCart();
  const { isModalOpen, modalMessage, openModal } = useModal();
  const modalType = "deleteAll";

  const handleDeleteButtonClick = () => {
    openModal(modalType);
  };

  return (
    <div className="flex justify-between items-center">
      {isModalOpen && <Modal type={modalType} message={modalMessage} />}
      <div className="checkbox-container">
        <Checkbox label={"선택해제"} onClick={selectAllItems} />
      </div>
      <Button className="delete-button" onClick={handleDeleteButtonClick}>
        상품삭제
      </Button>
    </div>
  );
};

export default ProductsController;
