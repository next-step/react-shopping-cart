import React, { memo } from "react";
import { Product } from "../../../store/store";
import { Link } from "react-router-dom";

export type Props = {
  product: Product;
  onClick: () => void;
};
const Modal = ({ product, onClick }: Props) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span>modal</span>
        <div onClick={() => onClick()}>쇼핑 계속하기</div>
        <Link to="/cart">장바구니 가기</Link>
      </div>
    </div>
  );
};

export default memo(Modal);
