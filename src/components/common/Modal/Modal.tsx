import React, { memo, useState } from "react";
import { Product } from "../../../store/store";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

export type Props = {
  modalType: string;
  product?: Product;
};

type ModalContent = {
  [key: string]: {
    message: string;
    button1: string;
    button2: string;
    handleButton1: () => void;
    handleButton2: () => void;
  };
};

const modalContent: ModalContent = {
  add: {
    message: "장바구니에 담겼습니다!",
    button1: "계속 쇼핑하기",
    button2: "장바구니 이동",
    handleButton1: () => {
      alert("모달 닫기");
    },
    handleButton2: () => {
      alert("장바구니 페이지 이동");
    },
  },
  delete: {
    message: "정말 삭제하시겠습니까?",
    button1: "YES",
    button2: "NO",
    handleButton1: () => {
      alert("삭제 후 모달 닫기");
    },
    handleButton2: () => {
      alert("모달 닫기");
    },
  },
};

const Modal = ({ product, modalType }: Props) => {
  const { message, button1, button2, handleButton1, handleButton2 } =
    modalContent[modalType];

  return (
    <div className="modal">
      <div className="modal-content">
        <p>{message}</p>
        <div className="modal-button-container">
          <Button className="primary-button-small" onClick={handleButton1}>
            {button1}
          </Button>
          <Button className="primary-button-small" onClick={handleButton2}>
            {button2}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default memo(Modal);
